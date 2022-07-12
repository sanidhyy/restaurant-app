import React from "react";

import { images } from "../../constants";

// Sub Heading
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    {/* Title */}
    <p className="p__cormorant">{title}</p>
    {/* Spoon Image */}
    <img src={images.spoon} alt="Spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
