import React, { FC } from "react";
import "./googleButton.scss";

const GoogleButton: FC = () => {
  return (
    <button className="google-button">
      <img
        src={require("../../../../assets/images/icon-google.png")}
        alt="google"
      />
      <span>Gooogle</span>
    </button>
  );
};

export default GoogleButton;
