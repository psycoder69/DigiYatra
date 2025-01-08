import { GoBackButton } from "../GoBackButton";
import { GetBoardingPassButton } from "../SelectSeat/GetBoardingPassButton";
import { LeftAirplaneWing } from "../SelectSeat/LeftAirplaneWing"
import { RightAirplaneWing } from "../SelectSeat/RightAirplaneWing";
import { SeatArrangement } from "../SelectSeat/SeatArrangement";

export const SelectSeat = () => {
    return (
        <section className="h-dvh overflow-y-auto">
            <h1 className="text-4xl font-semibold text-white text-center py-16">
                Select 2 Seats
            </h1>

            <div
                style={{
                    marginBottom: "-350px",
                    width: "350px",
                    height: "700px",
                    borderWidth: "1px 1px 0px",
                    borderTopStyle: "solid",
                    borderRightStyle: "solid",
                    borderLeftStyle: "solid",
                    borderColor: "initial",
                    borderRadius: "50% 50% 0 0",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <div
                    style={{
                        clipPath:
                            "polygon(50% 0%, 80% 10%, 97% 34%, 100% 60%, 71% 36%, 50% 29%, 26% 37%, 0px 59%, 3% 32%, 20% 10%)",
                    }}
                    className="w-4/5 h-52 mt-24 bg-gray-500"
                />
            </div>

            <div className="flex items-center justify-center flex-1">
                <LeftAirplaneWing />

                <SeatArrangement />

                <RightAirplaneWing />
            </div>

            <div className="w-full flex items-center justify-center gap-4 py-16">
                <GoBackButton />
                <GetBoardingPassButton />
            </div>
        </section>
    );
};