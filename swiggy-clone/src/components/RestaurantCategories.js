import { useState } from "react";
import Item from "./Item";

const RestaurantCategories = ({ data, showItem,setShowIndex }) => {

  const onClickHandler = () => {
     setShowIndex();
  };
  return (
    <div>
      <div className="text-center">
        <div>
          <div
            className="bg-grey-50 shadow-md flex justify-between w-6/12 mx-auto p-4 font-medium my-2 cursor-pointer"
            onClick={onClickHandler}
          >
            <div>
              {data?.card?.card?.title} ({data.card.card.itemCards.length})
            </div>
            <div>🔽</div>
          </div>
          <div>{showItem && <Item itemCards={data.card.card.itemCards} />}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
