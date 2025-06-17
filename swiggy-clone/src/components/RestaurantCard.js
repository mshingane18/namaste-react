const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, rating, deliveryTime } = resData;
  return (
    <div className="restro-card">
      <img className="restro-logo" src={resData.image} alt="restaurant-logo" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
