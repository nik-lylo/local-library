import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import SimpleLoader from "../../UI/loader/SimpleLoader";
import GenreBody from "./body/GenreBody";
import GenreHeader from "./header/GenreHeader";

const GenreContent: FC = () => {
  const { isGenreLoaded } = useTypedSelector((s) => s.genreReducer);
  const params = useParams();
  const { setFetchGenreList } = useActions();

  useEffect(() => {
    if (!params.genreName) return;
    setFetchGenreList(params.genreName);
  }, [params.genreName]);

  return (
    <div className="genre-content">
      {isGenreLoaded ? (
        <div className="genre-content__loader">
          <SimpleLoader blockSize="40px" />
        </div>
      ) : (
        <>
          <GenreHeader />
          <GenreBody />
        </>
      )}
    </div>
  );
};

export default GenreContent;
