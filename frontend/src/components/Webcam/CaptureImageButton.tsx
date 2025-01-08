import { Button } from "@/components/ui/button"; // Replace with actual Button import
import { CameraAltRounded } from "@mui/icons-material";
import Webcam from "react-webcam";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";

export const CaptureImageButton = ({
    cameraAllowed,
    webcamRef,
    passengerIndex,
}: {
    cameraAllowed: boolean;
    webcamRef: React.RefObject<Webcam | null>;
    passengerIndex: number;
}) => {
    const capturedImages = useTravelDetailsStore(
        (state) => state.passengers[passengerIndex].images || []
    );

    const setPassengerDetails = useTravelDetailsStore((state) => state.setPassengerDetails);

    const maxImages = 10; // Limit for the number of images

    const captureImage = (): string | null => {
        if (webcamRef.current) {
            return webcamRef.current.getScreenshot();
        }

        return null;
    };

    const handleCaptureStart = () => {
        if (capturedImages.length >= maxImages) return; // Prevent capturing more than maxImages

        const image = captureImage(); // Capture the image using the webcam

        if (image) {
            const updatedImages = [...capturedImages, image]; // Add the new image to the existing list
            setPassengerDetails(passengerIndex, { images: updatedImages }); // Update the store with the new images
        }
    };

    return (
        <Button
            type="button"
            onClick={handleCaptureStart}
            className="h-12 text-white text-base rounded-xl bg-[#9966ff] disabled:bg-slate-400 hover:bg-purple-600 hover:shadow-md hover:shadow-purple-400 active:scale-[0.97] active:shadow-none px-4 py-2 -mt-4 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={!cameraAllowed || capturedImages.length >= maxImages}
        >
            <CameraAltRounded className="!size-5" />
            {capturedImages.length >= maxImages ? "Limit Reached" : "Click to Capture"}
        </Button>
    );
};
