import { motion } from "framer-motion";
import Image from "next/image";

export const DigiYatraAssistant = () => {
    return (
        <motion.div
            className="size-[250px] relative digiyatra-assistant"
            initial={{ opacity: 0 }} // Start with 0 opacity
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 2 }} // Duration of the fade-in animation
        >
            <Image
                src="/riya-flight-attendant.png"
                alt="your-flight-attendant"
                width={250}
                height={250}
                className="size-[250px] absolute -left-2 -bottom-9 z-20 flex shrink-0"
                priority={true}
                fetchPriority="high"
                loading="eager"
                decoding="async"
            />
        </motion.div>
    );
};