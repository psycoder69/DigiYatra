import { create } from "zustand";

// Define the type for the status data
interface StatusState {
    title: string | null;
    description: string | null;
    image: string | null;
    imageWidth: number | null;
    video: string | null;
    videoWidth: number | null;
    buttonText: string | null;
    isStatusDialogOpen: boolean;
    nextBookingStep: number | null;
    setDialogStatus: (status: Partial<StatusState>) => void; // Function to update status
    closeStatusDialog: () => void; // Function to reset all fields to null
}

// Create the Zustand store
export const useStatusStore = create<StatusState>((set) => ({
    title: "Welcome to DigiYatra!",
    description: "Get ready to embark on a virtual flight journey, experiencing seamless travel and witnessing the power of AI-driven face detection.",
    image: null, // Set to null if there's no image
    imageWidth: null,
    video: "/plane.mp4", // Default video
    videoWidth: null,
    buttonText: "I'm ready, Let's go!",
    nextBookingStep: 0,
    isStatusDialogOpen: true,
    
    // Function to update the status fields
    setDialogStatus: (status) => set((prevState) => ({ ...prevState, ...status })),
    
    // Function to reset all fields to null
    closeStatusDialog: () => set({
        isStatusDialogOpen: false
    }),
}));

