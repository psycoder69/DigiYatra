import { AirplaneTicketRounded, ChairRounded, CheckCircleRounded, DoneAllRounded, PersonRounded, SearchRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import { JSX, useState } from "react";
import { DigiYatraAssistant } from "./DigiYatraAssistant/DigiYatraAssistant";
import { SidebarToggleButton } from "./Sidebar/SidebarToggleButton";
import { SidebarExpandedStepsButton } from "./Sidebar/SidebarExpandedStepsButton";
import { SidebarContractedStepsButton } from "./Sidebar/SidebarContractedStepsButton";

export interface StepType {
    name: string;
    icon: JSX.Element
}

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const steps: StepType[] = [
        {
            name: "Search Flight",
            icon: <SearchRounded className="size-5" />
        },
        {
            name: "Passenger Details",
            icon: <PersonRounded className="size-5" />
        },
        {
            name: "Select Seat",
            icon: <ChairRounded className="size-5" />
        },
        {
            name: "Boarding Pass",
            icon: <AirplaneTicketRounded className="size-5" />
        },
        {
            name: "Self Check-in",
            icon: <CheckCircleRounded className="size-5" />
        },
        {
            name: "Conclusion",
            icon: <DoneAllRounded className="size-5" />
        }
    ];

    return (
        <motion.aside
            initial={{
                width: "256px"
            }}
            animate={{
                width: isOpen ? "256px" : "64px",
            }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`w-64 h-[96dvh] flex flex-col justify-between relative border border-slate-200 rounded-2xl bg-white shadow-lg m-3 ${isOpen ? "px-4" : "px-2"} py-8 shrink-0`}
        >
            <SidebarToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="w-full flex flex-col items-start gap-2">
                {
                    steps.map((step, stepIndex) => {
                        return (
                            isOpen
                                ?
                                <SidebarExpandedStepsButton
                                    key={`${step}-${stepIndex}`}
                                    step={step}
                                    stepIndex={stepIndex}
                                    isOpen={true}
                                />
                                :
                                <SidebarContractedStepsButton
                                    key={`${step}-${stepIndex}`}
                                    step={step}
                                    stepIndex={stepIndex}
                                    isOpen={false}
                                />
                        )
                    })
                }
            </div>

            <DigiYatraAssistant />
        </motion.aside>
    );
}