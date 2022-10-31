import React from "react";
import PropTypes from "prop-types";

import "./CardKeyData.css";
import IconBackground from "../../Components/IconBackground/IconBackground";

/**
 * Component for showing card with data and IconBackground
 *
 * @component
 * @example
 * const src = "image.png"
 * const backgroundImageColor = "red"
 * const title = "Calories"
 * const value = "2000kCal",
 * return (
 *  <IconBackground image={energyIcon} backgroundImageColor="rgba(255, 0, 0, 0.1)" title="Calories" value={`${profil.keyData.calorieCount}kCal`}/>
 * )
 */
const CardKeyData = ({ icon, backgroundImageColor, title, value }) => {
  return (
    <div className="card-keydata">
      <IconBackground
        src={icon}
        backgroundColor={backgroundImageColor}
        imageSize="30%"
      />
      <div className="card-keydata__text">
        <p>{value}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

CardKeyData.propTypes = {
  /**Card's icon */
  icon: PropTypes.string,
  /**Icon's background */
  backgroundImageColor: PropTypes.string,
  /**Card's title */
  title: PropTypes.string,
  /**Card's value */
  value: PropTypes.string,
};

export default CardKeyData;
