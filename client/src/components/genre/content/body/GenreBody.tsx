import React, { FC } from "react";

import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IBook } from "../../../../lib/models/IBook";
import GenreCard from "../../../UI/card/GenreCard/GenreCard";

const GenreBody: FC = () => {
  const { genreList } = useTypedSelector((s) => s.genreReducer);

  return (
    <div className="genre-body">
      <div className="_container">
        <div className="genre-body__content">
          {genreList.map((it: IBook) => (
            <GenreCard book={it} key={it.etag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreBody;
