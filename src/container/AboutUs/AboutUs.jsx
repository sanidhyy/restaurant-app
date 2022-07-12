import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

// About Us
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* G Image */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        {/* Heading */}
        <h1 className="headtext__cormorant">About Us</h1>
        {/* Spoon Image */}
        <img src={images.spoon} alt="About spoon" className="spoon__img" />
        {/* Info */}
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        {/* Know More */}
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      {/* Knife Image */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="About Knife" />
      </div>

      <div className="app__aboutus-content_history">
        {/* Heading */}
        <h1 className="headtext__cormorant">Our History</h1>
        {/* Spoon Image */}
        <img src={images.spoon} alt="About spoon" className="spoon__img" />
        {/* Info */}
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        {/* Know More */}
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
