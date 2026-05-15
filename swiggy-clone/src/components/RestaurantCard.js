import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  // Use default empty object to avoid destructuring undefined
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info || {};
  return (
    <div className="w-56 bg-white border border-gray-200 flex flex-col p-2 rounded-sm">
      <img
        className="w-52 rounded-sm shadow-md mb-2"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info || {};
    return (
      <div className="relative">
        <label className="absolute top-50 left-4 to text-lg font-bold text-white ">
          {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
