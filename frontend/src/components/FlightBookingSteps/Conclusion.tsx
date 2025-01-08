import { Button } from "@/components/ui/button";
import { GoBackButton } from "../GoBackButton";
import { useFlightBookingStepStore } from "@/store/useFlightBookingStepStore";
import { RotateCcw } from "lucide-react";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";
import { useFlightSearchResults } from "@/store/useFlightSearchResults";

export const Conclusion = () => {
    const { setIsSearching } = useFlightSearchResults();
    const { setActiveBookingStep } = useFlightBookingStepStore();
    const { resetTravelDetails } = useTravelDetailsStore();

    const restartDigiYatraFlightBooking = () => {
        setIsSearching(false);
        resetTravelDetails();
        setActiveBookingStep(-1);
    };

    return (
        <section
            className="h-[96dvh] flex flex-col items-center justify-start gap-8 rounded-xl p-8 m-3 bg-[#f2f0f0]"
        >
            <h1 className="text-gray-800 text-4xl font-bold text-center">
                Conclusion
            </h1>

            <div className="w-full flex flex-1 flex-col items-start justify-start gap-4 text-left font-normal leading-[175%] overflow-y-auto px-16">
                <p className="text-lg">
                    Wow, what a whirlwind adventure we had with Digi Yatra! This awesome app taught us all about the magic of AI, from making our boarding passes to recognizing our faces at the airport. Let&apos;s relive our journey and see what amazing things we discovered!
                </p>

                <h3 className="text-xl font-semibold pt-4">
                    Our Incredible Journey:
                </h3>

                <p className="text-lg">
                    When we used Digi Yatra, we felt like we had a real-life wizard helping us out. First, AI worked its magic to create our boarding passes for the big trip. It was like having a super speedy assistant who knew just what we needed!
                </p>

                <p className="text-lg">
                    Then, when we arrived at the airport, we stepped up to a mysterious-looking machine with a camera. We were a little nervous at first, but when we stood in front of it, something amazing happened. The machine recognized our faces, just like that! It was like having a friend who could spot us in a crowded room.
                </p>

                <p className="text-lg">
                    And not only did it recognize us, but it also showed our names on the screen! It felt like we were in a magical storybook, where everything knows who we are.
                </p>

                <h3 className="text-xl font-semibold pt-4">
                    What We Learned:
                </h3>

                <p className="text-lg">
                    Through our adventure, we realized that AI isn&apos;t just some fancy technology. It&apos;s like having a wise friend who can do all sorts of incredible things, like making sure we have our boarding passes ready and helping us breeze through airport security.
                </p>

                <p className="text-lg">
                    We also learned that AI isn&apos;t perfect. Sometimes, it might get a little mixed up or not recognize us right away. But that&apos;s okay! We can help teach it and make it even better, just like helping a friend learn something new.
                </p>

                <h3 className="text-xl font-semibold pt-4">
                    Dreaming of More Adventures:
                </h3>

                <p className="text-lg">
                    As we head home from our journey, we can&apos;t help but dream of more adventures with AI by our side. With its help, we can explore new places, discover new things, and make memories that will last a lifetime. Who knows what magical adventures await us next time!
                </p>

                <div className="w-full flex items-center justify-center gap-8 py-4">
                    <GoBackButton />

                    <Button
                        className="h-12 font-semibold bg-gradient-to-r from-[#f4a742] via-[#ff5e9c] to-[#9966ff] 
                        shadow-md shadow-purple-300 active:shadow-none rounded-xl px-8 transition-transform duration-200 ease-out 
                        active:scale-[0.97]"
                        onClick={restartDigiYatraFlightBooking}
                    >
                        <span className="text-base text-white">Start Again</span>

                        <RotateCcw className="!size-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
