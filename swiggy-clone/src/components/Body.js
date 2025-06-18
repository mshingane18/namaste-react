import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurantList.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setRestaurantList(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurant.map((restaurant, index) => {
          let id = restaurant?.info?.id || index;
          return <RestaurantCard key={id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
