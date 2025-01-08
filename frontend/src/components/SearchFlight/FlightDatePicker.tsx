"use client"

import { format, isBefore, isToday } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarMonth } from "@mui/icons-material";
import { Label } from "@/components/ui/label";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { useFlightSearchResults } from "@/store/useFlightSearchResults";

export function FlightDatePicker() {
    const { travelDate, setTravelDate } = useTravelDetailsStore();
    const { setIsSearching } = useFlightSearchResults();

    const handleDateChange = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            setIsSearching(false);
            setTravelDate(selectedDate);
        }
    };

    return (
        <div className="flex flex-col items-start justify-start gap-2 date-dropdown">
            <Label htmlFor="date" className="font-medium ml-1">
                Date
            </Label>
            <Popover>
                <PopoverTrigger asChild id="date">
                    <Button
                        variant={"outline"}
                        className={`w-56 h-11 text-slate-800 text-base text-left font-semibold rounded-lg focus:ring-offset-2 focus:ring-1 focus:ring-slate-400 shadow ${!travelDate && "text-muted-foreground"
                            }`}
                    >
                        <CalendarMonth />
                        {travelDate
                            ? format(travelDate, "PPP")
                            : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={travelDate || undefined}
                        onSelect={handleDateChange}
                        initialFocus
                        disabled={(date) => isToday(date) || isBefore(date, new Date())}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};
