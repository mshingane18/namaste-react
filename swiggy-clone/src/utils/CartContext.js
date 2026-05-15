import { createContext } from "react";

const CartContext = createContext({
    cartItems: [],
    itemCount: 0,
});

export default CartContext;
