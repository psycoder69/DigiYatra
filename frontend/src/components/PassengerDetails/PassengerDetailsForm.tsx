import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { DigiYatraAIWebcam } from "../Webcam/DigiYatraAIWebcam";
import { Passenger, useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { CapturedUserImages } from "./CapturedUserImages";

export const PassengerDetailsForm = ({
    passengerIndex,
    passengerTitle,
}: {
    passengerIndex: number;
    passengerTitle: string;
}) => {
    const passenger = useTravelDetailsStore(
        (state) => state.passengers[passengerIndex]
    );
    const setPassengerDetails = useTravelDetailsStore(
        (state) => state.setPassengerDetails
    );

    // Generalized handler for updating passenger details
    const handlePassengerDetailChange = (
        field: keyof Passenger,
        value: string | null
    ) => {
        setPassengerDetails(passengerIndex, { [field]: value });
    };

    return (
        <form className="size-full flex flex-col items-center justify-start gap-8 text-center border border-gray-200 rounded-xl p-8 shadow shadow-gray-200">
            <h1 className="text-xl font-medium -mt-4">{passengerTitle}</h1>

            <div className="w-full flex items-center justify-center gap-8">
                <div className="w-full flex flex-col items-start justify-center gap-2">
                    <Label htmlFor={`first-name-${passengerIndex}`} className="text-gray-800 ml-1">
                        First Name*
                    </Label>

                    <Input
                        type="text"
                        id={`first-name-${passengerIndex}`}
                        name={`first-name-${passengerIndex}`}
                        minLength={2}
                        maxLength={16}
                        placeholder="First Name"
                        required
                        autoComplete="true"
                        value={passenger.firstName || ""}
                        onChange={(e) => handlePassengerDetailChange("firstName", e.target.value)}
                        className="h-11 !text-gray-800 !text-base placeholder:font-medium font-semibold border border-gray-200 focus-visible:ring-0 rounded-lg shadow shadow-gray-200"
                    />
                </div>

                <div className="w-full flex flex-col items-start justify-center gap-2">
                    <Label htmlFor={`last-name-${passengerIndex}`} className="text-gray-800 ml-1">
                        Last Name*
                    </Label>

                    <Input
                        type="text"
                        id={`last-name-${passengerIndex}`}
                        name={`last-name-${passengerIndex}`}
                        minLength={2}
                        maxLength={16}
                        placeholder="Last Name"
                        required
                        autoComplete="true"
                        value={passenger.lastName || ""}
                        onChange={(e) => handlePassengerDetailChange("lastName", e.target.value)}
                        className="h-11 !text-gray-800 !text-base placeholder:font-medium font-semibold border border-gray-200 focus-visible:ring-0 rounded-lg shadow shadow-gray-200"
                    />
                </div>
            </div>

            <div className="w-full flex flex-col items-start justify-center gap-2 email-input">
                <Label htmlFor={`email-${passengerIndex}`} className="text-gray-800 ml-1">
                    Email Address*
                </Label>

                <Input
                    type="email"
                    id={`email-${passengerIndex}`}
                    name={`email-${passengerIndex}`}
                    placeholder="Email Address"
                    required
                    autoComplete="true"
                    value={passenger.emailAddress || ""}
                    onChange={(e) => handlePassengerDetailChange("emailAddress", e.target.value)}
                    className="h-11 !text-gray-800 !text-base placeholder:font-medium font-semibold border border-gray-200 focus-visible:ring-0 rounded-lg shadow shadow-gray-200"
                />
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-8">
                <Label className="text-gray-800 flex items-center justify-center gap-2 ml-1">
                    Capture your face from different angles*

                    <Tooltip
                        title="Open your Webcam, Click and hold the Button, then rotate your face from left to right and back to left for accurate results."
                        placement="top"
                    >
                        <InfoRounded className="size-5" />
                    </Tooltip>
                </Label>

                <video
                    autoPlay
                    muted
                    loop
                    width="180"
                    height="180"
                    className="rounded-lg shadow-lg mx-auto"
                >
                    <source src="/preview-face.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <DigiYatraAIWebcam passengerIndex={passengerIndex} />

                <CapturedUserImages passengerIndex={passengerIndex} />
            </div>
        </form>
    );
};