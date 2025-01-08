import { create } from "zustand";

interface WebcamStore {
    activeWebcam: number | null; // Active webcam index (or null if none is active)
    setActiveWebcam: (index: number | null) => void; // Method to set the active webcam
}

export const useWebcamStore = create<WebcamStore>((set) => ({
    activeWebcam: null, // Initially no webcam is active
    setActiveWebcam: (index: number | null) => set({ activeWebcam: index }),
}));
