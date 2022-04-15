import React, { FC } from "react";
import "./customInput.scss";

const CustomInput: FC = () => {
  return (
    <div className="custom-input ">
      <button className="custom-input__icon icon-loop"></button>
      <input className="custom-input__input" type="text" placeholder="Search" />
    </div>
  );
};

export default CustomInput;
