import React from "react";
import ReactDOM from "react-dom/client";

/*
 *-header
 *  -logo
 *  -nav items
 *  -cart
 *-body
 *  -Search bar
 *  -Restaurant container
 *    -Restaurant card
 *      -Image
 *      -Name
 *      -Rating
 *      -Cuisines
 *      -Delivery time
 *-footer
 *  -Links
 *  -copyright
 */

const resList = [
  {
    id: 1,
    resName: "Biryani House",
    cuisine: "Biryani, North Indian, Mughlai",
    rating: 4.3,
    deliveryTime: "30 mins",
    costForTwo: "₹400 for two",
    address: "123 Main Street, Bengaluru",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-U3sq9yGQ8teKC9OWhW8CL8tpkSBXWL793A&s",
    isVeg: false,
    offers: ["20% off up to ₹100", "Free delivery above ₹299"],
  },
  {
    id: 2,
    resName: "Hariyali Pizza",
    cuisine: "Pizza, Italian, Fast Food",
    rating: 4.1,
    deliveryTime: "25 mins",
    costForTwo: "₹350 for two",
    address: "45 Park Lane, Bengaluru",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    isVeg: true,
    offers: ["10% off on all orders"],
  },
  {
    id: 3,
    resName: "Spice Hub",
    cuisine: "South Indian, Chinese",
    rating: 4.5,
    deliveryTime: "28 mins",
    costForTwo: "₹300 for two",
    address: "78 MG Road, Bengaluru",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    isVeg: false,
    offers: ["15% off above ₹500"],
  },
  {
    id: 4,
    resName: "Punjabi Tadka",
    cuisine: "Punjabi, North Indian",
    rating: 4.2,
    deliveryTime: "32 mins",
    costForTwo: "₹450 for two",
    address: "12 Brigade Road, Bengaluru",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJlfVITG5TrXlwMnd3NC9XC6WohWyRVwEzQ&s",
    isVeg: false,
    offers: ["Free dessert on orders above ₹400"],
  },
  {
    id: 5,
    resName: "Veggie Delight",
    cuisine: "Vegetarian, Healthy Food",
    rating: 4.6,
    deliveryTime: "22 mins",
    costForTwo: "₹320 for two",
    address: "56 Residency Road, Bengaluru",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    isVeg: true,
    offers: ["Buy 1 Get 1 Free on Salads"],
  },
  {
    id: 6,
    resName: "Tandoori Flames",
    cuisine: "Tandoor, North Indian",
    rating: 4.0,
    deliveryTime: "35 mins",
    costForTwo: "₹500 for two",
    address: "90 Indiranagar, Bengaluru",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    isVeg: false,
    offers: ["25% off on first order"],
  },
  {
    id: 7,
    resName: "Sushi World",
    cuisine: "Japanese, Sushi",
    rating: 4.4,
    deliveryTime: "40 mins",
    costForTwo: "₹700 for two",
    address: "33 Koramangala, Bengaluru",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
    isVeg: false,
    offers: ["Free Miso Soup with Sushi Platter"],
  },
  {
    id: 8,
    resName: "Burger Point",
    cuisine: "Burgers, Fast Food",
    rating: 4.1,
    deliveryTime: "20 mins",
    costForTwo: "₹250 for two",
    address: "21 Jayanagar, Bengaluru",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    isVeg: false,
    offers: ["Combo Meals from ₹199"],
  },
  {
    id: 9,
    resName: "The Dosa Corner",
    cuisine: "South Indian, Breakfast",
    rating: 4.7,
    deliveryTime: "18 mins",
    costForTwo: "₹200 for two",
    address: "67 Malleshwaram, Bengaluru",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d",
    isVeg: true,
    offers: ["Flat 30% off on Dosa"],
  },
  {
    id: 10,
    resName: "Urban Chaat",
    cuisine: "Chaat, Street Food",
    rating: 4.3,
    deliveryTime: "15 mins",
    costForTwo: "₹150 for two",
    address: "88 Commercial Street, Bengaluru",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    isVeg: true,
    offers: ["Free Pani Puri on orders above ₹200"],
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsKbRESVD7lqNT5RKJOnKqxYNrgEtQ2BWJA&s"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants" />
        <button>Search</button>
      </div>
      <div className="restro-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
