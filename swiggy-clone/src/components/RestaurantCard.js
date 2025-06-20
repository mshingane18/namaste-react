import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  // Use default empty object to avoid destructuring undefined
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info || {};
  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
