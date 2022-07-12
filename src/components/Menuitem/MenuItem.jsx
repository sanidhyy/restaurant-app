import React from "react";

import "./MenuItem.css";

// Menu Item
const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        {/* Title */}
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      {/* Dash */}
      <div className="app__menuitem-dash" />

      {/* Price */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    {/* Tags */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
