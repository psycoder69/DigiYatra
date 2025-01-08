import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useStatusStore } from "@/store/useStatusStore";
import Image from "next/image";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";

export const StatusUpdateDialog = () => {
    const { title, description, image, imageWidth, video, videoWidth, buttonText, nextBookingStep, isStatusDialogOpen, closeStatusDialog } = useStatusStore();

    const { setActiveBookingStep } = useFlightBookingStepStore();

    const handleStatusDialogButtonClick = () => {
        if (nextBookingStep !== null) {
            setActiveBookingStep(nextBookingStep);
        }

        closeStatusDialog();
    };

    return (
        <Dialog
            open={isStatusDialogOpen}
        >
            <DialogTitle className="hidden">
                {title}
            </DialogTitle>

            <DialogDescription className="hidden">
                {description}
            </DialogDescription>

            <DialogContent
                className="bg-white flex flex-col items-center justify-center gap-8 rounded-xl p-8"
            >
                <h1 className="text-2xl font-bold text-center">
                    {title}
                </h1>

                <p className="text-base text-center">
                    {description}
                </p>

                {
                    image
                    &&
                    <Image
                        src={image}
                        alt="status-image"
                        width={imageWidth || 120}
                        height={imageWidth || 120}
                        className={`${imageWidth ? `size-[${imageWidth}]` : "w-full"} rounded-lg mx-auto`}
                    />
                }

                {
                    video
                    &&
                    <video
                        autoPlay
                        muted
                        loop
                        width={videoWidth || 240}
                        height={videoWidth || 240}
                        className={`${videoWidth ? `size-[${videoWidth}]` : "w-full"} rounded-lg mx-auto`}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }

                <Button
                    type="button"
                    role="button"
                    aria-roledescription="button"
                    autoFocus
                    className="h-12 text-base border-none rounded-lg outline-none ring-0 focus:ring-0 bg-[#4F8CFF] hover:bg-[#3E7FD1] shadow hover:shadow-md hover:shadow-blue-400 active:shadow-none active:scale-[0.97] px-8 py-2 transition-all duration-200 ease-in-out"
                    onClick={handleStatusDialogButtonClick}
                >
                    {buttonText}
                </Button>
            </DialogContent>
        </Dialog>
    );
};