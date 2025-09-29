import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { MemoHook } from "./06-memos/MemoHook";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <HooksApp /> */}
        {/* <TrafficLight /> */}
        {/* <TrafficLightWithEffect /> */}
        {/* <PokemonPage /> */}
        {/* <FocusScreen /> */}
        {/* <TasksApp /> */}
        {/* <ScrambleWords /> */}
        <MemoHook />
    </StrictMode>
);
