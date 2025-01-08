interface MessageStep {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    className?: string;
    transformOrigin?: string;
    targetElementClass: string;
    message: string;
};

export const assistantGuideMessage: MessageStep[][] = [
    [
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Hey there! I’m Riya, your Digi-Yatra Flight Assistant. Let’s get you ready for your next adventure. Excited? Let’s dive in!"
        },
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Picture this: you and your friend gearing up for the perfect vacation. Let’s make it happen—step by step!"
        },
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Alright, time to hunt for flights! Adventure’s just a few clicks away. Let’s go!"
        },
        {
            top: 108,
            left: -64,
            transformOrigin: "bottom center",
            targetElementClass: "departure-dropdown",
            message: "Step one: Where are you starting from? Select your departure city here."
        },
        {
            top: 108,
            left: -64,
            transformOrigin: "bottom center",
            targetElementClass: "destination-dropdown",
            message: "Next stop: your destination! Pick the place you’re heading to."
        },
        {
            top: 108,
            left: -64,
            transformOrigin: "bottom center",
            targetElementClass: "date-dropdown",
            message: "When’s the big day? Select your travel date so we can lock it in!"
        },
        {
            top: 88,
            left: -128,
            transformOrigin: "bottom center",
            targetElementClass: "search-flight-button",
            message: "You’re all set! Just click here to find your flight and get ready to pack your bags!"
        }
    ],
    [
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Great job so far! Now, let’s fill in your and your friend’s details to move ahead."
        },
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Please enter the first name, last name, and email address for both travelers. Make sure all fields are complete!"
        },
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Let’s capture your face from multiple angles. This ensures seamless verification for a hassle-free journey!"
        }
    ],
    [
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Choose your seats for a comfortable journey."
        }
    ],
    [
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Great! Now, collect your boarding passes. Click on a boarding pass to view its details. At this stage, it is unapproved. Complete the verification process to approve it."
        }
    ],
    [
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Complete the Self Check-In verification process using our Digi-Yatra AI Webcam."
        },
    ],
    [
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Congratulations on completing your DigiYatra Verification process! 🎉 DigiYatra provides a paperless and contactless journey powered by facial recognition. You're all set to board your flight! 🌍✨"
        },
        {
            left: 160,
            bottom: 160,
            transformOrigin: "bottom center",
            targetElementClass: "digiyatra-assistant",
            message: "Enjoy your journey! DigiYatra ensures a futuristic travel experience. Don't forget to share your feedback for us to improve further."
        }
    ],
];