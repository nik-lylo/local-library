import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../lib/hooks/useActions";
import { IBook } from "../../../../lib/models/IBook";
import { RoutesEnum } from "../../../../router/RoutesEnum";
import "./catalogCard.scss";

interface CatalogCardProps {
  obj: IBook;
}

const CatalogCard: FC<CatalogCardProps> = ({ obj }) => {
  const { setSelectedBook } = useActions();
  const navigate = useNavigate();

  function handleClickNavigate() {
    setSelectedBook(obj);
    const bookJson = JSON.stringify(obj);
    localStorage.setItem("selectedBook", bookJson);
    navigate(RoutesEnum.BOOK_DETAIL);
  }

  return (
    <div className="catalog-card" onClick={handleClickNavigate}>
      <div className="catalog-card__image">
        <img src={obj.imageLink} alt="" />
      </div>

      <div className="catalog-card__publish">{obj.publisher}</div>
      <div className="catalog-card__title">{obj.title}</div>
      <div className="catalog-card__author">{obj.authors}</div>
    </div>
  );
};

export default CatalogCard;
