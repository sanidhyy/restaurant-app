import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

// Special Menu
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="#menu">
    <div className="app__specialMenu-title">
      {/* Sub Heading */}
      <SubHeading title="Menu that fits your palate" />
      {/* Heading */}
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        {/* Title */}
        <p className="app__specialMenu-menu_heading">Wine &amp; Beer</p>
        <div className="app__specialMenu-menu_items">
          {/* Wines */}
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      {/* Special Menu Wrapper Image */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="Menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        {/* Heading */}
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {/* Coktails */}
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* View More */}
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
