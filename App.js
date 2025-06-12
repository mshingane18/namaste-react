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

const AppLayout = () => {
  return <div className="app"></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
