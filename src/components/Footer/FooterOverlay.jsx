import React from "react";

import "./FooterOverlay.css";

// Footer Overlay
const FooterOverlay = () => (
  <div className="app__footerOverlay">
    {/* black overlay */}
    <div className="app__footerOverlay-black" />
    {/* img overlay */}
    <div className="app__footerOverlay-img app__bg" />
  </div>
);

export default FooterOverlay;
