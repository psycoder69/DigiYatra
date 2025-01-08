import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { FlightType } from "@/types/FlightType";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookFlightButton } from "./BookFlightButton";

export const SearchResultCard = ({ flight, index }: { flight: FlightType, index: number }) => {
    const { departure, destination, travelDate } = useTravelDetailsStore();

    if (!departure || !destination || !travelDate) return null;

    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Stagger effect
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <motion.div
            className="flex items-center justify-between flex-wrap w-full shrink-0 border border-slate-200 rounded-xl p-8 bg-slate-50 hover:bg-slate-100 transition cursor-pointer shadow-none hover:shadow-md hover:shadow-slate-200"
            custom={index} // Pass index for staggered animation
            variants={cardVariants} // Apply animation variants
            initial="hidden" // Initial state
            animate="visible" // Animate to visible state
        >
            <div className="flex flex-col gap-2">
                <Image
                    src={flight.logo}
                    alt={flight.name}
                    width={160}
                    height={64}
                    className="h-16 rounded-xl object-cover"
                    priority={false}
                    fetchPriority="low"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-2xl font-bold">{flight.departureTime}</span>
                    <span className="text-base font-medium">
                        {departure.split(" - ")[0]}
                    </span>
                </div>

                <div className="w-28 flex flex-col items-center justify-center">
                    <span className="w-full text-center text-base leading-7 font-medium border-b-[1.5px] border-b-slate-600">
                        {flight.totalTravelTime}
                    </span>
                    <span className="w-full text-center text-sm leading-7 font-medium border-t-[1.5px] border-t-slate-600">
                        Non-stop
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-2xl font-bold">{flight.arrivalTime}</span>
                    <span className="text-base font-medium">
                        {destination.split(" - ")[0]}
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <p className="w-full text-lg text-center font-semibold text-purple-800">
                    &#8377; {flight.price} INR
                </p>

                <BookFlightButton />
            </div>
        </motion.div>
    );
};