import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GenreHeader: FC = () => {
  const params = useParams();
  const [paramsText, setParamsText] = useState("");

  useEffect(() => {
    if (!params.genreName) return;
    const paramsArray = params.genreName.split("=");
    setParamsText(paramsArray[0]);
  }, []);

  return (
    <div className="genre-header">
      <div className="_container">
        <div className="genre-header__block">
          <div className="genre-header__title _catalog-title">
            Book:{` `}
            <span>
              about {` `}
              {paramsText}
            </span>
          </div>
          <div className="genre-header__underline _catalog-underline"></div>
        </div>
      </div>
    </div>
  );
};

export default GenreHeader;
