import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

// Award Card
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    {/* Award Image */}
    <img src={imgUrl} alt={title} />
    <div className="app__laurels_awards-card_content">
      {/* Award Title */}
      <p className="p__cormorant" style={{ color: "#DDCA87" }}>
        {title}
      </p>
      {/* Award Subtitle */}
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

// Laurels
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      {/* Sub Heading */}
      <SubHeading title="Awards &amp; Recognition" />
      {/* Heading */}
      <h1 className="headtext__cormorant">Our Laurels</h1>

      {/* Awards */}
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    {/* Wrapper Image - Laurels */}
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
);

export default Laurels;
