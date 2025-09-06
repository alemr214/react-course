import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: "Xbox", quantity: 1 },
    { productName: "PlayStation", quantity: 2 },
    { productName: "Nintendo Switch", quantity: 3 },
];

function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter
                    key={productName}
                    name={productName}
                    quantity={quantity}
                />
            ))}

            {/* <ItemCounter name='Xbox' quantity={1} />
            <ItemCounter name='PlayStation' quantity={2} />
            <ItemCounter name='Nintendo Switch' quantity={3} /> */}
        </>
    );
}

export default FirstStepsApp;
