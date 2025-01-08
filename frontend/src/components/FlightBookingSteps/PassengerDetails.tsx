import { PassengerDetailsForm } from "../PassengerDetails/PassengerDetailsForm";
import { SubmitPassengerDetailsButton } from "../PassengerDetails/SubmitPassengerDetailsButton";
import { GoBackButton } from "../GoBackButton";

export const PassengerDetails = () => {
    const passengers = ["Passenger 1", "Passenger 2"];

    return (
        <section className="h-[96dvh] flex flex-col items-center justify-start gap-8 rounded-xl p-8 m-3 bg-white">
            <h1 className="text-2xl font-medium">
                Set Passenger Details
            </h1>

            <div className="w-full flex flex-1 flex-col items-start justify-start gap-8 overflow-y-auto">
                <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-8">
                    {
                        passengers.map((passengerTitle, passengerIndex) => (
                            <PassengerDetailsForm
                                key={passengerIndex + passengerTitle}
                                passengerIndex={passengerIndex}
                                passengerTitle={passengerTitle}
                            />
                        ))
                    }
                </div>

                <div className="w-full flex items-center justify-center gap-4">
                    <GoBackButton />
                    <SubmitPassengerDetailsButton />
                </div>
            </div>
        </section>
    );
}