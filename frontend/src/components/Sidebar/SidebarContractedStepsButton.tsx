import { StepType } from "../Sidebar";
import { Tooltip } from "@mui/material";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";

export const SidebarContractedStepsButton = ({ step, stepIndex, isOpen }: { step: StepType, stepIndex: number, isOpen: boolean }) => {
    const { activeBookingStep, maxBookingStep, setActiveBookingStep } = useFlightBookingStepStore();

    return (
        <Tooltip
            role="button"
            title={step.name}
            placement="right"
            onClick={() => setActiveBookingStep(stepIndex)}
        >
            <button
                type="button"
                role="button"
                className={`${isOpen ? "w-full" : "w-11"} h-11 flex items-center justify-start gap-4 text-left text-base rounded-xl ${activeBookingStep === stepIndex ? "text-white bg-gradient-to-r from-[rgba(249,87,177,0.8)] to-[rgba(239,113,64,0.8)]" : "text-slate-600 bg-transparent hover:bg-slate-200"} ${isOpen ? "px-4" : "px-3"} disabled:bg-transparent disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-500 ease-in-out shadow-none`}
                disabled={stepIndex > maxBookingStep}
            >
                {
                    step.icon
                }
            </button>
        </Tooltip>
    );
};