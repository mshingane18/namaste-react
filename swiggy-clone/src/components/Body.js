import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const restaurantList = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const onlineStatus = useOnlineStatus();

  const ResCardWithDiscount = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    // When restaurantList changes, reset filteredRestaurant
    setFilteredRestaurant(restaurantList || []);
  }, [restaurantList]);

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!! check your internet connection.</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
  //conditional rendering
  return restaurantList === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-4 justify-center">
        <div className="flex mx-2">
          <input
            className="border border-solid"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="bg-green-400 mx-2 px-2 py-1 rounded-sm cursor-pointer"
            onClick={() => {
              const filteredList = restaurantList.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-400 mx-2 px-2 py-1 rounded-sm cursor-pointer"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <label>UserName: </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-white">
        {filteredRestaurant.map((restaurant, index) => {
          let id = restaurant?.info?.id || index;
          return (
            <Link className="m-2 p-2" key={id} to={"/restaurant/" + id}>
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <ResCardWithDiscount resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
