import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { ScrambleWords } from "./05-useReducer/ScrambleWords";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <HooksApp /> */}
        {/* <TrafficLight /> */}
        {/* <TrafficLightWithEffect /> */}
        {/* <PokemonPage /> */}
        {/* <FocusScreen /> */}
        {/* <TasksApp /> */}
        <ScrambleWords />
    </StrictMode>
);
