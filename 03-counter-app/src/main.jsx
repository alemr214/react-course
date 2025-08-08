import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorlApp from "./HelloWorldApp";
import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";
import "./styles/styles.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
);
