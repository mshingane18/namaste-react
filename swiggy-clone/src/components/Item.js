import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import CartContext from "../utils/CartContext";
const Item = ({ itemCards }) => {
  const { cartItems, setCartItems,itemCount, setItemCount  } = useContext(CartContext);

  return (
    <div>
      {itemCards.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="w-6/12 flex mx-auto text-start border-b border-gray-400 my-2"
          >
            <div className="w-9/12 mx-auto my-2">
              <div className="font-semibold text-gray-800 my-2">
                {item.card.info.name}
              </div>
              <div className="font-semibold my-2">
                ₹ {(item.card.info.defaultPrice || item.card.info.price) / 100}
              </div>
              <p className="text-gray-600 my-2">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 mx-auto flex items-center justify-center relative">
              <img
                className="w-56"
                src={IMG_CDN_URL + item.card.info.imageId}
                alt="resImg"
              />
              <button className="absolute bottom-1 bg-white cursor-pointer text-black font-bold p-2 rounded-md border border-gray-400"
              onClick={() => {
                setCartItems([...cartItems, item.card.info])
                setItemCount(itemCount + 1)
              }}>
                Add ➕
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Item;
