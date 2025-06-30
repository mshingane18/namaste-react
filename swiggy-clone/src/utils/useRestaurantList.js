import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";
const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList;
};
export default useRestaurantList;
