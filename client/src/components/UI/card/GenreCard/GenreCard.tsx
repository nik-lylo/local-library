import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../lib/hooks/useActions";
import { IBook } from "../../../../lib/models/IBook";
import { RoutesEnum } from "../../../../router/RoutesEnum";
import "./genreCard.scss";

interface GenreCardProps {
  book: IBook;
}
const GenreCard: FC<GenreCardProps> = ({ book }) => {
  const [isDiscriptionFull, setIsDiscriptionFull] = useState(false);
  const { setSelectedBook } = useActions();
  const navigate = useNavigate();

  function handleClickDescription() {
    setIsDiscriptionFull(!isDiscriptionFull);
  }

  function handleClickNavigate() {
    setSelectedBook(book);
    const bookJson = JSON.stringify(book);
    localStorage.setItem("selectedBook", bookJson);
    navigate(RoutesEnum.BOOK_DETAIL);
  }

  return (
    <div className="genre-card">
      <div className="genre-card__left card-left">
        <div className="card-left__link" onClick={handleClickNavigate}>
          <img className="card-left__image" src={book.imageLink} alt="book" />
        </div>
        <div className="card-left__content">
          <div className="_book-title card-left__title">{book.title}</div>
          <div className="_author-title card-left__author">{book.authors}</div>
          <div
            className={
              isDiscriptionFull
                ? "card-left__description card-left__description_full"
                : "card-left__description"
            }
          >
            {book.description}{" "}
          </div>
          <div className="card-left__more">
            {book.description && book.description.length > 214 ? (
              <span onClick={handleClickDescription}>
                {isDiscriptionFull ? "Less" : "More"}
              </span>
            ) : null}
          </div>
          <div className="card-left__pages">
            {book.pageCount ? book.pageCount : "?"}
            {` `}pages
          </div>
        </div>
      </div>
      <div className="genre-card__right card-right">
        <div className="card-right__rating">
          Rating <span>{book.averageRating ? book.averageRating : "?"}</span>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
