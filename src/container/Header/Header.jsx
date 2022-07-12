import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

// Header
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* Sub Heading */}
      <SubHeading title="Chase the new flavour" />
      {/* Heading */}
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      {/* Info */}
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      {/* Explore Menu */}
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    {/* Welcome Image */}
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
);

export default Header;
