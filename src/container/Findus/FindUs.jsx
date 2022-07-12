import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

// Find Us
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      {/* Sub Heading */}
      <SubHeading title="Contact" />
      {/* Heading */}
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>

      <div className="app__wrapper-content">
        {/* Info */}
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        {/* Opening Hours */}
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        {/* Time */}
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      {/* Visit Us */}
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>

    {/* Find Us Image */}
    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
