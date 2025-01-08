import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { VideocamRounded } from "@mui/icons-material";
import { CaptureImageButton } from "./CaptureImageButton";
import { VerifyPassengerButton } from "./VerifyPassengerButton";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";

export const DigiYatraAIWebcam = ({ passengerIndex }: { passengerIndex?: number }) => {
    const webcamRef = useRef<Webcam>(null);

    const [openWebcam, setOpenWebcam] = useState<boolean>(false);

    const [cameraAllowed, setCameraAllowed] = useState<boolean>(false);

    const passengers = useTravelDetailsStore((state) => state.passengers);

    const checkCameraPermission = async () => {
        try {
            setOpenWebcam(true); // Set the webcam open state to true

            const permission = await navigator.permissions.query({
                name: "camera" as PermissionName,
            });

            if (permission.state === "granted") {
                // Camera permission granted
                setCameraAllowed(true);
            } else if (permission.state === "prompt") {
                // Camera permission not granted yet, prompt the user
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    setCameraAllowed(true);
                    stream.getTracks().forEach((track) => track.stop()); // Stop the stream to release the camera
                } catch (error) {
                    console.error("User denied camera access:", error);
                    setCameraAllowed(false); // If the user denies access, set cameraAllowed to false
                }
            } else if (permission.state === "denied") {
                // If camera permission was previously denied
                console.error("Camera permission was denied by the user.");
                setCameraAllowed(false);
            }
        } catch (error) {
            console.error("Error checking camera permission:", error);
            setCameraAllowed(false);
        }
    };

    if (passengerIndex === undefined && passengers[0].passApproved && passengers[1].passApproved) {
        return null;
    }

    return (
        openWebcam ? (
            <div className="size-full flex flex-col items-center justify-start gap-8">
                {
                    cameraAllowed
                        ?
                        <Webcam
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={420}
                            height={316}
                            className="w-[420px] h-[316px] rounded-xl scale-x-[-1]"
                        />
                        :
                        <div className="w-[420px] h-[316px] flex flex-col items-center justify-center gap-1 text-white rounded-xl bg-black relative overflow-hidden">
                            <p className="z-10">Camera permission not allowed.</p>
                            <p className="z-10">{`Please allow camera to ${passengerIndex ? "capture" : "verify"}.`}</p>

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                        </div>
                }

                {
                    passengerIndex !== undefined
                        ?
                        <CaptureImageButton
                            passengerIndex={passengerIndex}
                            cameraAllowed={cameraAllowed}
                            webcamRef={webcamRef}
                        />
                        :
                        <VerifyPassengerButton
                            cameraAllowed={cameraAllowed}
                            webcamRef={webcamRef}
                        />
                }
            </div>
        ) : (
            <div className="size-full flex flex-col gap-4 items-center justify-center digiyatra-webcam">
                <Button
                    type="button"
                    role="button"
                    onClick={checkCameraPermission}
                    className="h-12 flex items-center justify-center gap-2 text-base text-white rounded-xl bg-[#9966ff] hover:bg-purple-600 hover:shadow-md hover:shadow-purple-400 active:shadow-none px-8 cursor-pointer active:scale-[0.97]"
                >
                    <VideocamRounded className="!size-6" />
                    DigiYatra AI Webcam
                </Button>

                <p className="text-xs">
                    *Click the Button to start DigiYatra AI Webcam*
                </p>
            </div>
        )
    );
};