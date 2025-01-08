import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { SwapHorizRounded } from "@mui/icons-material";

export const SwapTravelDetailsButton = () => {
    const { departure, destination, setDeparture, setDestination } = useTravelDetailsStore();

    const swapDepartureAndDestination = () => {
        setDeparture(destination);
        setDestination(departure);
    };

    return (
        <button
            type="button"
            role="button"
            className="size-10 icon-large shrink-0 bg-white hover:bg-slate-100 rounded-full"
            onClick={swapDepartureAndDestination}
        >
            <SwapHorizRounded />
        </button>
    );
};