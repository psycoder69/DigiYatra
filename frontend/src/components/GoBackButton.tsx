import { Button } from "@/components/ui/button";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";
import { Icons } from "./Icons";

export const GoBackButton = () => {
    const { prevBookingStep } = useFlightBookingStepStore();

    return (
        <Button
            className="h-12 font-semibold bg-[#9966ff] text-base text-white hover:bg-purple-600 hover:shadow-md hover:shadow-purple-400 rounded-xl px-8 transition-transform duration-200 ease-out active:shadow-none active:scale-[0.97]"
            onClick={() => prevBookingStep()}
        >
            <Icons.arrowLeft className="size-4" />

            Go Back
        </Button>
    );
};