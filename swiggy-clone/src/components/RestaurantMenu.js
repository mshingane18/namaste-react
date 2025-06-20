import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [colaps, setColaps] = useState(true);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantInfo(jsonData?.data);
  };

  if (restaurantInfo == null) return <Shimmer />;

  const { info } = restaurantInfo?.cards[2]?.card?.card;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="restaurant-info">
      <h1>{info.name}</h1>
      <div className="resSection1">
        <div className="resInnerCards">
          <div className="top-hading">
            <h3>
              {info.avgRatingString} ({info.totalRatingsString})
            </h3>
            <h3>{info.costForTwoMessage}</h3>
          </div>
          <p>{info.cuisines.join(", ")}</p>
          <p>Outlet {info.areaName}</p>
        </div>
      </div>
      <div className="resSection2">
        <h2 className="menu">MENU</h2>
        <hr />
        <div className="recommended">
          <div className="recom-header">
            <h3>Recommended</h3>
            <button
              className="colaps"
              onClick={() => {
                colaps ? setColaps(false) : setColaps(true);
              }}
            >
              {colaps ? "Show" : "Hide"}
            </button>
          </div>
          <hr />
          {colaps ? (
            <div className="items">
              <ul>
                {itemCards.map((item) => {
                  return (
                    <li key={item.card.info.id}>
                      <div className="itemRow">
                        <div>
                          <h1>{item.card.info.name}</h1>
                          <h3>
                            Rs.
                            {(item.card.info.defaultPrice ||
                              item.card.info.price) / 100}
                          </h3>
                          <p className="truncate">
                            {item.card.info.description}
                          </p>
                        </div>
                        <div className="img-btn">
                          <img
                            src={IMG_CDN_URL + item.card.info.imageId}
                            alt="resImg"
                          />
                        </div>
                      </div>
                      <hr />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
