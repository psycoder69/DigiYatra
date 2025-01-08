import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { useFlightSearchResults } from "@/store/useFlightSearchResults";

export const SearchFlightButton = () => {
    const { departure, destination, travelDate } = useTravelDetailsStore();
    const { isSearching, setIsSearching } = useFlightSearchResults();

    const handleSearchButtonClick = () => {
        toast.dismiss();

        const toastStyle = (bgColor: string) => ({
            style: {
                backgroundColor: bgColor,
                color: "white",
                fontWeight: "600",
                padding: "16px 24px",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
        });

        if (!departure) {
            toast.error("Please select Departure", toastStyle("#f44336")); // Red for error
        } else if (!destination) {
            toast.error("Please select Destination", toastStyle("#f44336")); // Red for error
        } else if (departure === destination) {
            toast.warning("Departure cannot be same as Destination", toastStyle("#ff9800")); // Orange for warning
        } else if (!travelDate) {
            toast.error("Please select a Date", toastStyle("#f44336")); // Red for error
        } else if (!isSearching) {
            setIsSearching(true);
        }
    };

    return (
        <Button
            className="h-11 font-semibold bg-gradient-to-r from-[#f4a742] via-[#ff5e9c] to-[#9966ff] shadow rounded-xl px-8 transition-transform duration-200 ease-out active:scale-95 hover:scale-105 search-flight-button"
            onClick={handleSearchButtonClick}
        >
            <Search className="!size-4" />
            <span className="text-base text-white">Search</span>
        </Button>
    )
};