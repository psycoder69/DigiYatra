import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const SidebarToggleButton = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch <SetStateAction <boolean>> }) => {
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Tooltip title={isOpen ? "Close Sidebar" : "Open Sidebar"} placement="right">
            <button
                type="button"
                className="size-6 text-slate-500 absolute top-10 -right-3 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-100 shadow-lg"
                onClick={toggleSidebar}
            >
                {
                    isOpen ? <KeyboardDoubleArrowLeft /> : <KeyboardDoubleArrowRight />
                }
            </button>
        </Tooltip>
    );
};