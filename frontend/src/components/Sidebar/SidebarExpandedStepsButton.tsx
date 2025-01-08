import { motion } from "framer-motion";
import { StepType } from "../Sidebar";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";

export const SidebarExpandedStepsButton = ({ step, stepIndex, isOpen }: { step: StepType, stepIndex: number, isOpen: boolean }) => {
    const { activeBookingStep, maxBookingStep, setActiveBookingStep } = useFlightBookingStepStore();

    return (
        <button
            type="button"
            role="button"
            onClick={() => setActiveBookingStep(stepIndex)}
            className={`${isOpen ? "w-full" : "w-11"} h-11 flex items-center justify-start gap-4 text-left text-base rounded-xl ${activeBookingStep === stepIndex ? "text-white font-semibold bg-gradient-to-r from-[rgba(249,87,177,0.8)] to-[rgba(239,113,64,0.8)]" : "text-slate-600 bg-transparent hover:bg-slate-200"} ${isOpen ? "px-4" : "px-3"} disabled:bg-transparent disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-500 ease-in-out shadow-none`}
            disabled={stepIndex > maxBookingStep}
        >
            {
                step.icon
            }
            {
                isOpen && (
                    <motion.span
                        key={step.name} // Key is important for proper animation reset
                        initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
                        animate={{ x: 0, opacity: 1 }} // Slide into place when opening
                        exit={{ x: "100%", opacity: 0 }} // Slide out to the right when closing
                        transition={{
                            type: "tween",
                            duration: 0.4 + stepIndex * 0.1, // Add delay for staggered effect
                            ease: "easeOut"
                        }}
                        className="whitespace-nowrap"
                    >
                        {step.name}
                    </motion.span>
                )
            }
        </button>
    );
};