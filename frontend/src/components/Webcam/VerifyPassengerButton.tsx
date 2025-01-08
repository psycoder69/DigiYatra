import { RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonRounded } from "@mui/icons-material";
import Webcam from "react-webcam";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { useStatusStore } from "@/store/useStatusStore";

interface APIResponse {
    match: boolean;
    userId?: string;
}

export const VerifyPassengerButton = ({ cameraAllowed, webcamRef }: { cameraAllowed: boolean, webcamRef: RefObject<Webcam | null> }) => {
    const [status, setStatus] = useState<string>("");

    const { setDialogStatus } = useStatusStore();

    const { passengers, setPassengerDetails } = useTravelDetailsStore();

    const captureImage = (): string | null => {
        if (webcamRef.current) {
            return webcamRef.current.getScreenshot();
        }

        return null;
    };

    const handleVerifyPassenger = async () => {
        const image = captureImage(); // Capture live face image

        if (!image) {
            setStatus("No live image captured.");
            return;
        }

        setStatus("Verifying...");

        const users = passengers
            .filter(
                (passenger) =>
                    passenger.id !== null && // Ensure userId is not null
                    passenger.images &&
                    passenger.images.length > 0 && // Ensure they have images
                    !passenger.passApproved // Exclude approved passengers
            )
            .map((passenger) => ({
                userId: passenger.id as string, // Cast to string as we know it's not null
                userImages: passenger.images as string[], // Ensure type safety
            }));

        try {
            const response = await fetch("http://localhost:8000/facial_recognition/recognize_face/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    users, // Array of users with their images
                    liveFace: image, // Live face image captured from webcam
                }),
            });

            const data: APIResponse = await response.json();

            if (data.match && data.userId) {
                const matchedPassengerIndex = passengers.findIndex((passenger) => passenger.id === data.userId);

                if (matchedPassengerIndex !== -1) {
                    setPassengerDetails(matchedPassengerIndex, { passApproved: true });

                    const matchedPassenger = passengers[matchedPassengerIndex];

                    setStatus(
                        `Passenger verified successfully! Matched: ${matchedPassenger.firstName} ${matchedPassenger.lastName}`
                    );

                    setDialogStatus({
                        title: "🎉 Passenger Verified! 🎉",
                        description: `✨ Congratulations, ${matchedPassenger.firstName} ${matchedPassenger.lastName}! ✨  
                    You’ve successfully completed your verification. Collect your approved Boarding Pass from the Counter and get ready to board your flight and enjoy a seamless journey ahead! 🛫✨  
                    Bon Voyage! 🌍💼`,
                        image: null,
                        video: "done.webm",
                        videoWidth: 200,
                        buttonText: "Let's Go! 🚀",
                        nextBookingStep: null,
                        isStatusDialogOpen: true
                    });
                } else {
                    setStatus("Passenger not found in the records.");
                }
            } else {
                setStatus("Passenger not recognized.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Error verifying passenger");
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <Button
                type="button"
                className="h-12 text-white text-base rounded-xl bg-[#9966ff] disabled:bg-slate-400 hover:bg-purple-600 hover:shadow-md hover:shadow-purple-400 active:shadow-none px-4 py-2 cursor-pointer disabled:cursor-not-allowed active:scale-[0.97]"
                disabled={!cameraAllowed}
                onClick={handleVerifyPassenger}
            >
                <PersonRounded className="!size-5" />
                Verify Passenger
            </Button>

            {
                status
                &&
                <p>{status}</p>
            }
        </div>
    );
};