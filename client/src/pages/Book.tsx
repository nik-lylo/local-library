import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "../scss/page/book.scss";

const Book: FC = () => {
  return (
    <div className="book">
      <Outlet />
    </div>
  );
};

export default Book;
