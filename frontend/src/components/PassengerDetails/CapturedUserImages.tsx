import { Button } from "@/components/ui/button"; // Replace with actual Button import
import Image from "next/image";
import { DeleteRounded, PhotoRounded } from "@mui/icons-material";
import { useTravelDetailsStore } from "@/store/useTravelDetailsStore";

export const CapturedUserImages = ({ passengerIndex }: { passengerIndex: number }) => {
    const capturedImages = useTravelDetailsStore(
        (state) => state.passengers[passengerIndex].images || []
    );

    const setPassengerDetails = useTravelDetailsStore((state) => state.setPassengerDetails);

    const handleDeleteImage = (index: number) => {
        const updatedImages = capturedImages.filter((_, i) => i !== index); // Remove the selected image
        setPassengerDetails(passengerIndex, { images: updatedImages }); // Update the store with the new images list
    };

    return (
        <div className="w-full max-w-[360px] flex flex-wrap items-center justify-center gap-1 mx-auto">
            {capturedImages.map((image, index) => (
                <div key={index} className="size-16 shrink-0 flex items-center justify-center group relative">
                    <Image
                        src={image}
                        alt={`Captured-${index + 1}`}
                        width={64}
                        height={64}
                        className="size-16 shrink-0 object-cover border rounded-xl scale-x-[-1]"
                    />

                    <Button
                        type="button"
                        role="button"
                        className="!size-16 shrink-0 absolute inset-0 text-red-400 bg-transparent hover:bg-transparent rounded-full p-1 text-sm opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center"
                        aria-label="Delete image"
                        onClick={() => handleDeleteImage(index)}
                    >
                        <DeleteRounded className="!size-8" />
                    </Button>
                </div>
            ))}

            {/* Render placeholders for remaining boxes */}
            {Array.from({ length: 10 - capturedImages.length }, (_, index) => (
                <div
                    key={`placeholder-${index}`}
                    className="w-16 h-16 bg-gray-200 border rounded-xl flex items-center justify-center text-gray-400 shrink-0"
                >
                    <PhotoRounded className="!size-8" />
                </div>
            ))}
        </div>
    );
};