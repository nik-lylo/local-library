import React, { FC } from "react";
import GenreLink from "../../UI/link/genre_link/GenreLink";

const MainHeader: FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__content _container">
        <GenreLink text="Music" />
        <GenreLink text="Sport" />
        <GenreLink text="Wrestling" />
        <GenreLink text="Batman" />
        <GenreLink text="Football" />
        <GenreLink text="Anime" />
        <GenreLink text="JavaScript" />
        <GenreLink text="React" />
        <GenreLink text="Food" />
        <GenreLink text="Holmes" />
        <GenreLink text="Politic" />
        <GenreLink text="Flowers" />
      </div>
    </header>
  );
};

export default MainHeader;
