import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo == null) return <Shimmer />;

  const { info } = restaurantInfo?.cards[2]?.card?.card;
  const categories =
    (restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div>
      <div className="bg-green-200 shadow-sm w-6/12 mx-auto rounded-md my-2 p-2">
        <h1 className="font-bold text-lg">{info.name}</h1>
        <div className="top-hading">
          <h3>
            {info.avgRatingString} ({info.totalRatingsString})
          </h3>
          <h3>{info.costForTwoMessage}</h3>
        </div>
        <p>{info.cuisines.join(", ")}</p>
        <p>Outlet {info.areaName} ( )</p>
      </div>
      {categories.map((category) => (
        <RestaurantCategories
          key={category.card.card.categoryId}
          data={category}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
