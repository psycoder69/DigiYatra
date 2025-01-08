import { Passenger, useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { FlightRounded } from "@mui/icons-material";
import { Icons } from "../Icons";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export const FlightBoardingPass = ({ passenger, passengerIndex }: { passenger: Passenger, passengerIndex: number }) => {
    const { departure, destination, travelDate, selectedSeats } = useTravelDetailsStore();

    if (!departure || !destination || !travelDate || !passenger.id || !passenger.firstName || !passenger.lastName || !passenger.emailAddress) return null;

    const leftTopPanelData = [
        {
            title: "Flight",
            subtitle: "6E 6182"
        },
        {
            title: "Gate",
            subtitle: "A 21"
        },
        {
            title: "Boarding Time",
            subtitle: "1500"
        },
        {
            title: "Boarding",
            subtitle: "Zone 1"
        },
        {
            title: "Seat",
            subtitle: selectedSeats[passengerIndex] || "10F"
        }
    ];

    const leftBottomPanelData = [
        {
            title: "Date",
            subtitle: travelDate.toDateString()
        },
        {
            title: "Departure",
            subtitle: "1555 HRS"
        },
        {
            title: "Seq",
            subtitle: "0102"
        },
        {
            title: "Services",
            subtitle: "NIL"
        },
    ];

    const rightPanelData = [
        {
            title: "Flight",
            subtitle: "6E 6182"
        },
        {
            title: "Date",
            subtitle: travelDate.toDateString()
        },
        {
            title: "PNR",
            subtitle: "KV4FXW"
        },
        {
            title: "Services",
            subtitle: "NIL"
        },
    ];

    return (
        <div className="flex flex-col flex-1 items-center justify-start gap-8 bg-white p-16 pt-8">
            <h1 className="text-2xl font-bold text-center">
                Boarding Pass Issued
                {
                    passenger.passApproved
                        ?
                        <>
                            &nbsp;(Approved)

                        </>
                        :
                        <>
                            &nbsp;(Final Approval Pending)
                        </>
                }
            </h1>

            <table className="size-full border border-black">
                <thead className="w-full">
                    <tr className="w-full grid grid-cols-[70%,30%]">
                        <th className="flex items-center justify-start gap-2 text-[#235fdf] text-2xl text-left border-b border-b-black p-4">
                            <FlightRounded />
                            Boarding Pass (Web Check In)
                        </th>
                        <th className="flex items-center justify-center gap-2 text-[#235fdf] text-xl font-bold border-l border-dashed border-l-black p-4">
                            Your departure terminal is T1
                            <FlightRounded />
                        </th>
                    </tr>
                </thead>

                <tbody className="size-full">
                    <tr className="size-full grid grid-cols-[70%,30%]">
                        <td className="size-full flex flex-col items-start justify-start gap-4 px-8 py-4 border-r border-dashed border-r-black">
                            <h1 className="w-full flex items-center justify-between text-xl font-bold">
                                <span>
                                    {passenger.firstName + "/" + passenger.lastName}
                                </span>

                                <span>
                                    {`${departure.split("-")[1]} (T1) to ${destination.split("-")[1]}`}
                                </span>
                            </h1>

                            <div className="w-full flex items-center justify-between gap-4">
                                {
                                    leftTopPanelData.map((data, dataIndex) => (
                                        <div key={dataIndex} className="flex flex-col flex-1 items-start justify-start gap-1 border-2 border-black px-4 py-2">
                                            <span className="text-[15px] font-normal">
                                                {data.title}
                                            </span>

                                            <span className="text-xl font-bold">
                                                {data.subtitle}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="size-full flex items-center justify-start gap-10 relative">
                                <Icons.qrCode className="!size-32 shrink-0" />

                                <div className="size-full max-w-[70%] grid grid-cols-2 place-items-start place-content-center gap-x-0 gap-y-2">
                                    {
                                        leftBottomPanelData.map((data, dataIndex) => (
                                            <div key={dataIndex} className="flex flex-1 items-center justify-start">
                                                <span className="w-24 text-lg font-normal">
                                                    {data.title}
                                                </span>

                                                <span className="text-lg font-bold">
                                                    {data.subtitle}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>

                                {
                                    passenger.passApproved
                                    &&
                                    <div className="shrink-0 absolute right-0 -top-16 -rotate-[36deg]">
                                        <Icons.approvedSeal />
                                    </div>
                                }
                            </div>

                            <p className="w-full text-sm text-center -mb-2">
                                Gate is subject to change and will close 25 minutes prior to departure.
                            </p>
                        </td>

                        <td className="size-full flex flex-col items-start justify-start border-t border-t-black gap-4 px-8 py-4">
                            <div className="text-lg font-bold">
                                {passenger.firstName + "/" + passenger.lastName}
                            </div>

                            <div className="text-lg font-bold">
                                {`${departure.split("-")[1]} (T1) to ${destination.split("-")[1]}`}
                            </div>

                            <div className="flex flex-col items-start justify-start gap-1">
                                {
                                    rightPanelData.map((data, dataIndex) => (
                                        <div
                                            key={dataIndex}
                                            className="flex items-center justify-start"
                                        >
                                            <span className="w-28 text-lg font-normal">
                                                {data.title}
                                            </span>

                                            <span className="text-lg font-bold">
                                                {data.subtitle}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex items-center justify-start gap-12">
                                <Icons.qrCode className="!size-16" />

                                <div className="flex flex-col flex-1 items-start justify-start">
                                    <div className="flex items-center justify-center">
                                        <span className="w-20 text-lg font-medium">
                                            Seat
                                        </span>

                                        <span className="text-lg font-bold">
                                            {selectedSeats[passengerIndex] || "10F"}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <span className="w-20 text-lg font-medium">
                                            Seq
                                        </span>

                                        <span className="text-lg font-bold">
                                            0102
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="w-full h-8 flex items-center justify-end gap-4 -mb-8">
                <DialogClose asChild>
                    <Button className="h-11 text-[#235fdf] font-semibold text-base border border-[#235fdf] bg-transparent hover:bg-blue-50 px-8 py-2">
                        Close
                    </Button>
                </DialogClose>

                <Button
                    className="h-11 text-white font-semibold text-base border border-[#235fdf] bg-[#235fdf] hover:bg-[#114ccd] px-8 py-2"
                    onClick={() => window.print()}
                >
                    Print
                </Button>
            </div>
        </div>
    );
};