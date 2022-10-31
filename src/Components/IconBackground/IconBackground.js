import React from "react";
import PropTypes from "prop-types";

import "./IconBackground.css";

/**
 * Component for showing icon with background
 *
 * @component
 * @example
 * const src = "image.png"
 * const backgroundColor = "red"
 * const alt = "icon"
 * const imageSize = "55%",
 * return (
 *  <IconBackground src={src} backgroundColor="white" alt="icon" imageSize="55%"/>
 * )
 */
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
  /** icon's src */
  src: PropTypes.string,
  /**  icon's background */
  backgroundColor: PropTypes.string,
  /** icon's alt */
  alt: PropTypes.string,
  /** icon's size */
  imageSize: PropTypes.string,
};

export default IconBackground;
