import { FlightDatePicker } from "../SearchFlight/FlightDatePicker";
import { DepartureAirportPicker } from "../SearchFlight/DepartureAirportPicker";
import { SwapTravelDetailsButton } from "../SearchFlight/SwapTravelDetailsButton";
import { DestinationAirportPicker } from "../SearchFlight/DestinationAirportPicker";
import { SearchFlightButton } from "../SearchFlight/SearchFlightButton";
import { SearchResults } from "../SearchFlight/SearchResults";

export const SearchFlight = () => {
    return (
        <section className="h-[96dvh] flex flex-col items-center justify-start gap-8 pt-8 m-3">
            <h1 className="text-4xl font-bold text-white text-center">Search Flight</h1>

            <div className="w-full max-h-[calc(100%-72px)] flex flex-col gap-8 rounded-xl bg-white px-8 py-8">
                <div className="flex flex-wrap items-end justify-center gap-4">
                    <DepartureAirportPicker />

                    <SwapTravelDetailsButton />

                    <DestinationAirportPicker />

                    <FlightDatePicker />

                    <SearchFlightButton />
                </div>

                <SearchResults />
            </div>
        </section>
    );
};
