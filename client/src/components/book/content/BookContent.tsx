import React, { FC, useEffect } from "react";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";

import "./bookContent.scss";

const BookContent: FC = () => {
  const { selectedBook } = useTypedSelector((s) => s.bookReducer);
  const { setSelectedBook } = useActions();

  useEffect(() => {
    if (selectedBook === null) {
      const book = localStorage.getItem("selectedBook");
      if (!book) return;
      const bookParsed = JSON.parse(book);
      setSelectedBook(bookParsed);
    }
  }, []);

  return (
    <div className="book-content">
      <div className="_container">
        <div className="book-content__card book-content-card">
          <div className="book-content-card__info">
            <div className="book-content-card__image">
              <img src={selectedBook?.imageLink} alt="Book" />
            </div>
            <div className="book-content-card__text">
              <div className="_book-title book-content-card__title">
                {selectedBook?.title}
              </div>
              <div className="_author-title book-content-card__author">
                {selectedBook?.authors}
              </div>
              <div className="book-content-card__decription">
                {selectedBook?.description}
              </div>
            </div>
          </div>
          <div className="book-content-card__right">
            <div className="book-content-card__rating">
              Rating
              <div className="book-content-card__ratblock">
                <span>{selectedBook?.averageRating || "?"}</span>
                <div className="book-content-card__star icon-star-full"></div>
              </div>
            </div>
            <div className="book-content-card__publishhouse">
              Publishing house
            </div>
            <div className="book-content-card__publish">
              {selectedBook?.publisher}
            </div>
            <div className="book-content-card__date">
              {selectedBook?.publishedDate}
            </div>
            <div className="book-content-card__page">
              {selectedBook?.pageCount} pages
            </div>
            <button className="book-content-card__add">
              Add
              <div className="icon-book"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookContent;
