import React from "react";
import PropTypes from "prop-types";

import "./IconBackground.css";

const IconBackground = ({
  src,
  backgroundColor,
  alt = "icon",
  imageSize = "55%",
}) => {
  return (
    <div className="icon-background" style={{ backgroundColor }}>
      <img src={src} alt={alt} style={{ height: imageSize }} />
    </div>
  );
};

IconBackground.propTypes = {
  src: PropTypes.string,
  backgroundColor: PropTypes.string,
  alt: PropTypes.string,
  imageSize: PropTypes.string,
};

export default IconBackground;
