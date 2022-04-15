import React, { FC } from "react";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import PaginationCustom from "../../UI/pagination/PaginationCustom";

const GenrePagination: FC = () => {
  const { totalBookGenre } = useTypedSelector((s) => s.genreReducer);

  return (
    <div className="genre-pagination">
      <PaginationCustom totalItems={totalBookGenre} />
    </div>
  );
};

export default GenrePagination;
