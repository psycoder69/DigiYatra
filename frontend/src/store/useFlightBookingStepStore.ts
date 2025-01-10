import { create } from "zustand";
import { assistantGuideMessage } from "@/data/AssistantGuideMessage";

interface FlightBookingStepStore {
    activeBookingStep: number; // Current step in the process (0 to 5)
    maxBookingStep: number; // Tracks the maximum step reached so far
    currentMessageStep: number; // Tracks the current message step in the process
    setActiveBookingStep: (step: number) => void;
    nextBookingStep: () => void; // Method to move to the next booking step
    prevBookingStep: () => void; // Method to move to the previous booking step
    nextMessageStep: () => void; // Method to move to the next message step
    prevMessageStep: () => void; // Method to move to the previous message step
    resetMessageStep: () => void; // Method to reset the message step
}

export const useFlightBookingStepStore = create<FlightBookingStepStore>((set) => ({
    activeBookingStep: 0, // Initialize with the first step
    maxBookingStep: 0, // Initially, the max step is 0
    currentMessageStep: -1, // Start before the first message
    setActiveBookingStep: (step) =>
        set((state) => {
            const newActiveBookingStep = Math.min(Math.max(step, 0), 5); // Ensure the step is within bounds (0-5)

            return {
                activeBookingStep: newActiveBookingStep,
                maxBookingStep: (step < 0 ? 0 : Math.max(state.maxBookingStep, newActiveBookingStep)), // Update maxBookingStep if the current step is greater
                currentMessageStep: 0
            };
        }),
    nextBookingStep: () =>
        set((state) => {
            const nextBookingStep = Math.min(state.activeBookingStep + 1, 5); // Max step is 5
            return {
                activeBookingStep: nextBookingStep,
                maxBookingStep: Math.max(state.maxBookingStep, nextBookingStep), // Update maxBookingStep if necessary
                currentMessageStep: 0
            };
        }),
    prevBookingStep: () =>
        set((state) => ({
            activeBookingStep: Math.max(state.activeBookingStep - 1, 0), // Min step is 0
            currentMessageStep: 0
        })),
    nextMessageStep: () =>
        set((state) => {
            const messages = assistantGuideMessage[state.activeBookingStep] || [];
            return {
                currentMessageStep: Math.min(state.currentMessageStep + 1, messages.length - 1), // Prevent going out of bounds
            };
        }),
    prevMessageStep: () =>
        set((state) => ({
            currentMessageStep: Math.max(state.currentMessageStep - 1, 0), // Prevent going below 0
        })),
    resetMessageStep: () => set({ currentMessageStep: -1 }), // Reset message step to -1
}));
