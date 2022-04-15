import React from "react";
import { Route, Routes } from "react-router-dom";
import BookContent from "../components/book/content/BookContent";
import GenreContent from "../components/genre/content/GenreContent";
import Book from "../pages/Book";
import Error from "../pages/Error";
import Genre from "../pages/Genre";
import Main from "../pages/Main";
import MyLibrary from "../pages/MyLibrary";
import { RoutesEnum } from "./RoutesEnum";

const AppRouter = () => {
  return (
    <div className="app-router">
      <Routes>
        <Route path={RoutesEnum.MAIN} element={<Main />} />
        <Route path={RoutesEnum.GENRE} element={<Genre />}>
          <Route path=":genreName" element={<GenreContent />} />
        </Route>
        <Route path={RoutesEnum.BOOK} element={<Book />}>
          <Route path="detail" element={<BookContent />} />
        </Route>
        <Route path={RoutesEnum.MY_LIBRARY} element={<MyLibrary />} />
        <Route path={RoutesEnum.ERROR} element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
