import { useEffect, useState } from "react";

const colors = {
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
};

// Definimos un tipo que representa los colores posibles del semáforo
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColor>("red");
    const [countdown, setCountdown] = useState(5);

    // Countdown effect
    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdown]);

    // Traffic light effect
    useEffect(() => {
        if (countdown > 0) return;
        if (countdown === 0) {
            setCountdown(5);
            if (light === "red") {
                setLight("green");
                return;
            }
            if (light === "green") {
                setLight("yellow");
                return;
            }
            if (light === "yellow") {
                setLight("red");
                return;
            }
        }
    }, [light, countdown]);

    return {
        // Props
        colors,
        light,
        countdown,

        // Computed
        percentage: (countdown / 5) * 100,

        // Methods
    };
};
