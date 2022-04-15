import React, { FC } from "react";
import "./simpleLoader.scss";

interface SimpleLoaderProps {
  blockSize: string;
}

const SimpleLoader: FC<SimpleLoaderProps> = ({ blockSize }) => {
  return (
    <div className="flex-container">
      <div
        className="loader"
        style={{ width: blockSize, height: blockSize }}
      ></div>
    </div>
  );
};

export default SimpleLoader;
