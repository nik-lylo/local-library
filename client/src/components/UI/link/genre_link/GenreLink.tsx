import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./genreLink.scss";

interface GenreLinkProps {
  text: string;
}

const GenreLink: FC<GenreLinkProps> = ({ text }) => {
  return (
    <NavLink className="link-genre" to={`genre/${text.toLowerCase()}=1`}>
      {text}
    </NavLink>
  );
};

export default GenreLink;
