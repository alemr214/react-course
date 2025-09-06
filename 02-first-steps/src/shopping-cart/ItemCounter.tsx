import { useState } from "react";
import "../styles/ItemCounter.min.css";

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
    const [counter, setCounter] = useState(quantity || 0);

    return (
        <section className='item-row'>
            <span
                className='item-text'
                style={{ color: counter === 1 ? "red" : "black" }}
            >
                {name}
            </span>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
        </section>
    );
};
