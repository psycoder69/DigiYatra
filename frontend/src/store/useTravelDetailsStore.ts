import { create } from "zustand";

export interface Passenger {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    images: string[] | null; // Array to store user images as strings (e.g., base64-encoded)
    passApproved: boolean;
}

interface TravelDetailsStore {
    departure: string | null;
    destination: string | null;
    travelDate: Date | null;
    chosenAirlines: string | null; // New field for chosen airline
    setDeparture: (departure: string | null) => void;
    setDestination: (destination: string | null) => void;
    setTravelDate: (date: Date | null) => void;
    setChosenAirlines: (airline: string | null) => void; // Setter for chosen airline

    selectedSeats: string[]; // Array to hold selected seats
    setSelectedSeats: (seat: string) => void; // Method to add a seat and maintain array size

    passengers: Passenger[]; // Array to hold 2 passengers
    setPassengerDetails: (index: number, passenger: Partial<Passenger>) => void; // Method to update passenger details

    resetTravelDetails: () => void; // Reset Travel Details
}

const getPassengerID = (): string => {
    return "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, () => {
        const random = Math.random() * 16 | 0; // Generate a random number between 0 and 15

        return random.toString(16); // Convert to hexadecimal
    });
};

export const useTravelDetailsStore = create<TravelDetailsStore>((set) => ({
    departure: null,
    destination: null,
    travelDate: null,
    chosenAirlines: null, // Initialize chosenAirlines with null

    setDeparture: (departure) => set({ departure }),
    setDestination: (destination) => set({ destination }),
    setTravelDate: (travelDate) => set({ travelDate }),
    setChosenAirlines: (airline) => set({ chosenAirlines: airline }), // Set chosen airline

    selectedSeats: [], // Initialize as an empty array
    setSelectedSeats: (seat) =>
        set((state) => {
            const updatedSeats = [...state.selectedSeats];
            if (!updatedSeats.includes(seat)) {
                // If the seat is not already selected
                if (updatedSeats.length === 2) {
                    updatedSeats.shift(); // Remove the first element if the array has 2 items
                }
                updatedSeats.push(seat); // Add the new seat
            }
            return { selectedSeats: updatedSeats };
        }),

    passengers: [
        { id: getPassengerID(), firstName: "", lastName: "", emailAddress: "", images: [], passApproved: false },
        { id: getPassengerID(), firstName: "", lastName: "", emailAddress: "", images: [], passApproved: false },
    ], // Initialize with two empty passengers
    setPassengerDetails: (index, passenger) =>
        set((state) => {
            const updatedPassengers = [...state.passengers];
            updatedPassengers[index] = {
                ...updatedPassengers[index],
                ...passenger,
            };
            return { passengers: updatedPassengers };
        }),
    resetTravelDetails: () => {
        set({
            departure: null,
            destination: null,
            travelDate: null,
            chosenAirlines: null,
            selectedSeats: [],
            passengers: [
                { id: getPassengerID(), firstName: "", lastName: "", emailAddress: "", images: [], passApproved: false },
                { id: getPassengerID(), firstName: "", lastName: "", emailAddress: "", images: [], passApproved: false },
            ],
        });
    }
}));
