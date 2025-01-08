import { Button } from "@/components/ui/button";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { Icons } from "../Icons";

export const GetBoardingPassButton = () => {
    const { selectedSeats } = useTravelDetailsStore();
    const { nextBookingStep } = useFlightBookingStepStore();

    return (
        <Button
            className={`h-12 font-semibold bg-gradient-to-r from-[#f4a742] via-[#ff5e9c] to-[#9966ff] 
                shadow-lg rounded-xl px-8 transition-transform duration-200 ease-out 
                active:scale-95 hover:scale-105 
                disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 
                disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-inner`}
            disabled={selectedSeats.length < 2}
            onClick={() => nextBookingStep()}
        >
            <span className="text-base text-white">Get Boarding Pass</span>

            <Icons.arrowRight className="size-4" />
        </Button>
    );
};