import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

// Newsletter
const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      {/* Sub Heading */}
      <SubHeading title="Newsletter" />
      {/* Heading */}
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And never miss Latest Updates.</p>
    </div>

    <div className="app__newsletter-input flex__center">
      {/* Subscribe Input */}
      <input type="email" placeholder="Enter your E-mail address" />
      {/* Subscribe Button */}
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
