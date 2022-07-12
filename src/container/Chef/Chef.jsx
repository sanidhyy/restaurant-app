import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

// Chef
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    {/* Wrapper Image - Chef */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      {/* Sub Heading */}
      <SubHeading title="Chef's Word" />
      {/* Heading */}
      <h1 className="headtext__cormorant">What we belive in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/* Quote image */}
          <img src={images.quote} alt="Quote" />
          {/* Info */}
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
          </p>
        </div>

        <p className="p__opensans">
          {/* Descriptive Info */} auctor sit iaculis in arcu. Vulputate nulla
          lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac
          consequat, aliquam molestie lectus eu. Congue iaculis integer
          curabitur semper sit nunc.
        </p>
      </div>

      {/* Chef Info */}
      <div className="app__chef-sign">
        {/* Chef Name */}
        <p>Kevin Luo</p>
        {/* Chef Designation */}
        <p className="p__opensans">Chef &amp; Founder</p>
        {/* Chef Sign */}
        <img src={images.sign} alt="Chef Sign" />
      </div>
    </div>
  </div>
);

export default Chef;
