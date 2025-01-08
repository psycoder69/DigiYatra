import { flightsList } from "@/data/FlightsList";
import { SearchResultCard } from "./SearchResultCard";
import { useFlightSearchResults } from "@/store/useFlightSearchResults";

export const SearchResults = () => {
    const { isSearching } = useFlightSearchResults();

    if (!isSearching) return null;

    return (
        <div className="w-full max-w-[1024px] h-full flex flex-col gap-4 border border-slate-100 rounded-xl overflow-y-auto p-4 mx-auto">
            {flightsList.map((flight, index) => (
                <SearchResultCard
                    key={`${index}-${flight.name}`}
                    flight={flight}
                    index={index}
                />
            ))}
        </div>
    );
};