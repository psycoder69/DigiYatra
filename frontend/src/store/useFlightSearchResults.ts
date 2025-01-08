import { create } from 'zustand';

type FlightSearchState = {
    isSearching: boolean;
    setIsSearching: (state: boolean) => void;
};

export const useFlightSearchResults = create<FlightSearchState>((set) => ({
    isSearching: false, // Initial state
    setIsSearching: (state) => set({ isSearching: state }),
}));