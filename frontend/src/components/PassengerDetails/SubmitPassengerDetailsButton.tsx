import { Button } from "@/components/ui/button";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { Icons } from "../Icons";
import { useStatusStore } from "@/store/useStatusStore";

export const SubmitPassengerDetailsButton = () => {
    const passengers = useTravelDetailsStore((state) => state.passengers);

    const { setDialogStatus } = useStatusStore();

    // Helper function to validate email
    const validateEmail = (email: string | null) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email || "");
    };

    // Disable the button if any of the fields are invalid
    const isDisabled = passengers.some((passenger) => {
        const { firstName, lastName, emailAddress, images } = passenger;

        return (
            !firstName ||
            !lastName ||
            !emailAddress ||
            firstName.length < 3 ||
            lastName.length < 3 ||
            !validateEmail(emailAddress) ||
            !images ||
            images.length < 10
        );
    });

    const submitPassengerDetails = () => {
        setDialogStatus({
            title: "Passenger Details Submitted",
            description: "Passenger Details Submitted successfully!",
            image: null,
            video: "done.webm",
            videoWidth: 200,
            buttonText: "Continue",
            nextBookingStep: 2,
            isStatusDialogOpen: true
        });
    };

    return (
        <Button
            className="h-12 flex items-center justify-center gap-2 font-semibold bg-gradient-to-r from-[#f4a742] via-[#ff5e9c] to-[#9966ff]
                shadow rounded-xl px-8 transition-transform duration-200 ease-out active:scale-95 hover:scale-105
                disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 
                disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-inner"
            disabled={isDisabled}
            onClick={submitPassengerDetails}
        >
            <span className="!text-base text-white">Continue</span>

            <Icons.arrowRight className="!size-4" />
        </Button>
    );
};