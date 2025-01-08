import json
import face_recognition
import numpy as np
import base64
from django.http import JsonResponse
from io import BytesIO
from PIL import Image
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

# Helper function to decode and process base64 images
def decode_base64_image(img_data):
    try:
        if "," in img_data:
            img_data = img_data.split(",")[1]  # Remove base64 prefix if present
        img_bytes = base64.b64decode(img_data)
        img = Image.open(BytesIO(img_bytes))
        return np.array(img)
    except Exception as e:
        raise ValueError("Invalid base64 image data.")

@csrf_exempt
@require_POST
def recognize_face(request):
    """
    API to verify if the live face matches with any user in the given array.
    Parameters:
    - users: Array of user objects, each containing:
        - userId: Unique identifier for the user
        - userImages: Array of base64 strings representing the user's images
    - liveFace: Base64 string of the live face image to match against the users
    """
    try:
        data = json.loads(request.body.decode('utf-8'))
        users = data.get("users", [])
        live_face_data = data.get("liveFace", "")

        if not users or not live_face_data:
            return JsonResponse({"error": "Users or live face data missing."}, status=400)

        # Decode and process the live face
        try:
            live_face_array = decode_base64_image(live_face_data)
        except ValueError as ve:
            return JsonResponse({"error": str(ve)}, status=400)

        live_face_encodings = face_recognition.face_encodings(live_face_array)
        if not live_face_encodings:
            return JsonResponse({"error": "No face detected in the live face image."}, status=400)

        live_encoding = live_face_encodings[0]  # Assuming only one face in the live image

        # Iterate through each user and compare faces
        for user in users:
            user_id = user.get("userId", "")
            user_images = user.get("userImages", [])

            if not user_id or not user_images:
                continue

            for img_data in user_images:
                try:
                    user_image_array = decode_base64_image(img_data)
                except ValueError:
                    continue

                user_encodings = face_recognition.face_encodings(user_image_array)
                if not user_encodings:
                    continue

                # Compare live face encoding with each user's image encoding
                if any(face_recognition.compare_faces(user_encodings, live_encoding)):
                    return JsonResponse({"match": True, "userId": user_id})

        return JsonResponse({"match": False, "message": "No matching user found."})

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON format."}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
