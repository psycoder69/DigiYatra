import { Button } from "@/components/ui/button";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { GoBackButton } from "../GoBackButton";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";
import { Icons } from "../Icons";
import { AirplaneTicketRounded } from "@mui/icons-material";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FlightBoardingPass } from "../BoardingPass/FlightBoardingPass";

export const BoardingPass = () => {
    const passengers = useTravelDetailsStore((state) => state.passengers);
    const { nextBookingStep } = useFlightBookingStepStore();

    return (
        <section className="h-[96dvh] flex flex-col items-center justify-start gap-8 rounded-xl p-8 m-3 bg-white">
            <h1 className="text-[32px] font-bold">
                Collect your Boarding Pass
            </h1>

            <div className="flex flex-col flex-1 items-center justify-center gap-8">
                {
                    passengers.map((passenger, passengerIndex) => (
                        <Dialog key={passengerIndex}>
                            <DialogTrigger asChild>
                                <Button className="h-12 font-semibold bg-[#9966ff] text-base text-white hover:bg-purple-600 hover:shadow-md hover:shadow-purple-400 rounded-xl px-8 transition-transform duration-200 ease-out active:shadow-none active:scale-[0.97]">
                                    <AirplaneTicketRounded className="!size-6" />
                                    {`${passenger.firstName}'s Boarding Pass`}
                                </Button>
                            </DialogTrigger>

                            <DialogHeader className="max-w-[480px] flex flex-col items-center justify-center gap-1">
                                <DialogTitle>
                                    {`${passenger.firstName}'s Digital Boarding Pass`}
                                </DialogTitle>

                                <DialogDescription>
                                    {`This digital boarding pass belongs to ${passenger.firstName}. Please present it at the counter to complete the check-in process before boarding your flight.`}
                                </DialogDescription>
                            </DialogHeader>

                            <DialogContent className="min-w-[1440px] w-[100dvw] max-w-[1600px] shrink-0 border-none rounded-none bg-transparent overflow-auto">
                                <FlightBoardingPass passenger={passenger} passengerIndex={passengerIndex} />
                            </DialogContent>
                        </Dialog>
                    ))
                }
            </div>

            <div className="w-full flex items-center justify-center gap-4 py-4">
                <GoBackButton />

                <Button
                    className={`h-12 font-semibold bg-gradient-to-r from-[#f4a742] via-[#ff5e9c] to-[#9966ff] 
                        shadow-md shadow-purple-300 active:shadow-none rounded-xl px-8 transition-transform duration-200 ease-out 
                        active:scale-[0.97]
                        disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 
                        disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-inner`}
                    onClick={() => nextBookingStep()}
                >
                    <span className="text-base text-white">Self Check-In</span>

                    <Icons.arrowRight className="size-4" />
                </Button>
            </div>
        </section>
    );
};