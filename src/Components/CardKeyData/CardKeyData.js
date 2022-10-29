import React from "react";
import PropTypes from "prop-types";

import "./CardKeyData.css";
import IconBackground from "../../Components/IconBackground/IconBackground";

const CardKeyData = ({ image, backgroundImageColor, title, value }) => {
  return (
    <div className="card-keydata">
      <IconBackground
        src={image}
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
  image: PropTypes.string,
  backgroundImageColor: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default CardKeyData;
