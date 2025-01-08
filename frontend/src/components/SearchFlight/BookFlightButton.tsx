import { Button } from "@/components/ui/button";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";

export const BookFlightButton = () => {
    const { nextBookingStep } = useFlightBookingStepStore();

    return (
        <Button
            type="button"
            role="button"
            className="px-4 py-2 bg-[#9966ff] text-base text-white rounded-lg hover:bg-purple-600"
            onClick={() => nextBookingStep()}
        >
            Book Now
        </Button>
    );
};