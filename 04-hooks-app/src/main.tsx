import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { FocusScreen } from "./04-useRef/FocusScreen";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <HooksApp /> */}
        {/* <TrafficLight /> */}
        {/* <TrafficLightWithEffect /> */}
        {/* <PokemonPage /> */}
        <FocusScreen />
    </StrictMode>
);
