import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { assistantGuideMessage } from "@/data/AssistantGuideMessage";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";

export const DigiYatraAssistantMessage = () => {
    const { activeBookingStep, currentMessageStep, nextMessageStep, prevMessageStep, resetMessageStep } = useFlightBookingStepStore();

    // State for storing the target element's position
    const [elementPosition, setElementPosition] = useState<{
        top: number;
        left: number;
        bottom: number;
        right: number;
    }>({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });

    // Ensure the steps array and currentStep are valid
    const currentStepData = currentMessageStep < 0 ? null : assistantGuideMessage[activeBookingStep][currentMessageStep];
    const totalMessageSteps = assistantGuideMessage[activeBookingStep] ? assistantGuideMessage[activeBookingStep].length : 0;

    useEffect(() => {
        if (!currentStepData || !currentStepData.targetElementClass) return;

        const element = document.querySelector(`.${currentStepData.targetElementClass}`) as HTMLElement;

        if (element) {
            // Get the element's position and size in the viewport
            const { top, left, bottom, right } = element.getBoundingClientRect();

            // Adjust for scroll position to get absolute values
            setElementPosition({
                top: top + window.scrollY,
                left: left + window.scrollX,
                bottom: window.innerHeight - bottom - window.scrollY,
                right: window.innerWidth - right - window.scrollX,
            });
        }
    }, [activeBookingStep, currentMessageStep]);

    // Guard against invalid step or empty steps array
    if (!currentStepData) return null;

    // Dynamically use top, left, bottom, or right based on step data
    const positioningStyles = {
        position: "absolute" as const,
        top: currentStepData.top !== undefined ? currentStepData.top + elementPosition.top : undefined,
        left: currentStepData.left !== undefined ? currentStepData.left + elementPosition.left : undefined,
        bottom: currentStepData.bottom !== undefined ? currentStepData.bottom + elementPosition.bottom : undefined,
        right: currentStepData.right !== undefined ? currentStepData.right + elementPosition.right : undefined,
        transformOrigin: currentStepData.transformOrigin || "bottom center",
    };

    return (
        <motion.div
            className={`w-[360px] flex flex-col items-start justify-start gap-8 text-white text-base font-medium border border-transparent shadow-lg z-30 rounded-xl bg-gradient-to-br from-[#3c7b99] via-[#5aa4cf] to-[#88c5e5] p-4 ${currentStepData.className || ""}`}
            style={positioningStyles}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 40,
                delay: 1,
            }}
        >
            <div className="overflow-visible flex flex-col gap-4 text-white">
                <Typewriter
                    key={activeBookingStep + currentMessageStep} // Re-run typing animation when currentStep changes
                    words={[currentStepData.message]}
                    loop={1}
                    cursor={false}
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={1000}
                />
            </div>

            <div className="w-full flex items-center justify-between">
                <Button
                    className="bg-transparent hover:bg-transparent shadow-none hover:shadow hover:underline"
                    onClick={() => resetMessageStep()}
                >
                    Skip
                </Button>

                <span className="text-sm">
                    {currentMessageStep + 1} / {totalMessageSteps}
                </span>

                <div className="flex items-center justify-end gap-4">
                    {/* Hide "Back" button on the first step */}
                    {currentMessageStep > 0 && (
                        <Button
                            className="h-9 text-white hover:text-[#3c7b99] text-sm border border-white px-4 bg-transparent hover:bg-white"
                            onClick={prevMessageStep}
                        >
                            Back
                        </Button>
                    )}

                    <Button
                        className="h-9 text-[#3c7b99] border border-white text-sm px-4 bg-[#ffffffd6] hover:bg-white"
                        onClick={() => {
                            if (currentMessageStep === totalMessageSteps - 1) {
                                // Logic for "Finish" button
                                resetMessageStep();
                            } else {
                                nextMessageStep();
                            }
                        }}
                    >
                        {currentMessageStep === totalMessageSteps - 1 ? "Finish" : "Next"}
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
