"use client";

import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";
import { PassengerDetails } from "@/components/FlightBookingSteps/PassengerDetails";
import { SearchFlight } from "@/components/FlightBookingSteps/SearchFlight";
import { SelectSeat } from "@/components/FlightBookingSteps/SelectSeat";
import { BoardingPass } from "@/components/FlightBookingSteps/BoardingPass";
import { SelfCheckIn } from "@/components/FlightBookingSteps/SelfCheckIn";
import { Conclusion } from "@/components/FlightBookingSteps/Conclusion";
import { Sidebar } from "@/components/Sidebar";
import { StatusUpdateDialog } from "@/components/StatusUpdateDialog";
import { DigiYatraAssistantMessage } from "@/components/DigiYatraAssistant/DigiYatraAssistantMessage";

export default function Home() {
  const { activeBookingStep } = useFlightBookingStepStore();

  const renderStep = () => {
    switch (activeBookingStep) {
      case 0:
        return <SearchFlight />;
      case 1:
        return <PassengerDetails />;
      case 2:
        return <SelectSeat />;
      case 3:
        return <BoardingPass />;
      case 4:
        return <SelfCheckIn />;
      case 5:
        return <Conclusion />;
      default:
        return null;
    }
  };

  return (
    <main className="w-full min-h-screen bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 grid grid-cols-[auto_1fr]">
        <Sidebar />

        {renderStep()}

        <StatusUpdateDialog />

        <DigiYatraAssistantMessage />
      </div>
    </main>
  );
};
