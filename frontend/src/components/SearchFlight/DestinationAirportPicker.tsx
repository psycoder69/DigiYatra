import { airportList } from "@/data/AiportList";
import {
    Select as Dropdown,
    SelectContent as DropdownContent,
    SelectItem as DropdownItem,
    SelectTrigger as DropdownTrigger,
    SelectValue as DropdownValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FlightLandRounded } from "@mui/icons-material";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { useFlightSearchResults } from "@/store/useFlightSearchResults";

export const DestinationAirportPicker = () => {
    const { destination, setDestination } = useTravelDetailsStore();
    const { setIsSearching } = useFlightSearchResults();

    const handleDestinationChange = (destinationAirport: string) => {
        setIsSearching(false);
        setDestination(destinationAirport);
    };

    return (
        <div className="flex flex-col items-start justify-start gap-2 destination-dropdown">
            <Label htmlFor="destination" className="font-medium ml-1">
                Destination
            </Label>

            <Dropdown
                key={destination}
                value={destination || undefined}
                defaultValue={destination || undefined}
                onValueChange={handleDestinationChange}
            >
                <DropdownTrigger id="destination" className="w-60 h-11 flex items-center justify-between gap-4 text-slate-800 text-base font-semibold hover:bg-gray-100 rounded-lg focus:ring-offset-2 focus:ring-1 focus:ring-slate-400 shadow">
                    <DropdownValue placeholder="Destination">
                        {destination || "Destination"}
                    </DropdownValue>
                </DropdownTrigger>
                <DropdownContent>
                    {airportList.map((airport) => (
                        <DropdownItem
                            key={airport.code}
                            value={airport.code}
                            className="max-w-80 cursor-pointer"
                        >
                            <div className="flex items-center justify-center gap-4">
                                <FlightLandRounded className="icon-large text-slate-600" />
                                <div className="flex flex-col items-start justify-center">
                                    <p className="text-base text-slate-700 font-bold">{airport.code}</p>
                                    <p className="text-sm text-slate-600 font-normal">{airport.name}</p>
                                </div>
                            </div>
                        </DropdownItem>
                    ))}
                </DropdownContent>
            </Dropdown>
        </div>
    );
};