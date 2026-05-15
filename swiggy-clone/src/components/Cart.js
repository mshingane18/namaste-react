import React, { useContext } from "react";
import CartContext from "../utils/CartContext";
import { IMG_CDN_URL } from "../utils/constants";
const Cart = () => {
      const { cartItems, setCartItems, itemCount, setItemCount } = useContext(CartContext);
      if (cartItems.length === 0) {
        return (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
          </div>
        );
      }
  return (
  <div>
    <div className="flex justify-center items-center my-4">
            <h1 className="text-2xl font-bold">Cart</h1>
          </div>
      {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="w-6/12 flex mx-auto text-start border-b border-gray-400 my-2"
              >
                <div className="w-9/12 mx-auto my-2">
                  <div className="font-semibold text-gray-800 my-2">
                    {item.name}
                  </div>
                  <div className="font-semibold my-2">
                    ₹ {(item.defaultPrice || item.price) / 100}
                  </div>
                  <p className="text-gray-600 my-2">{item.description}</p>
                </div>
                <div className="w-3/12 mx-auto flex items-center justify-center relative">
                  <img
                    className="w-56"
                    src={IMG_CDN_URL + item.imageId}
                    alt="resImg"
                  />
                  <button className="absolute bottom-1 bg-white cursor-pointer text-black font-bold p-2 rounded-md border border-gray-400"
                    onClick={() => {
                      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                      setItemCount(itemCount - 1);
                    }}>
                    Remove ➖
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center items-center my-4">
            <button className="border p-2 rounded-md text-2xl cursor-pointer font-bold"
              onClick={() => {
                setCartItems([]);
                setItemCount(0);
              }}>
              Clear Cart
            </button>
          </div>
  </div>
  );
};

export default Cart;