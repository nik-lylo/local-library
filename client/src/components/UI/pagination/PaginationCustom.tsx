import React, { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaginationButton from "../button/pagination_button/PaginationButton";
import "./paginationCustom.scss";

interface PaginationCustomProps {
  totalItems: number;
}

const PaginationCustom: FC<PaginationCustomProps> = ({ totalItems }) => {
  const [clickedPage, setClickedPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();
  const array: null[] = [];
  array.length = Math.round(totalItems / 10);
  array.fill(null);

  function handleClickNext() {
    if (clickedPage < array.length + 1) {
      const link = location.pathname.split("=");
      setClickedPage(clickedPage + 1);
      navigate(`${link[0]}=${clickedPage + 1}`);
    }
  }
  function handleClickPrev() {
    if (clickedPage > 1) {
      const link = location.pathname.split("=");
      setClickedPage(clickedPage - 1);
      navigate(`${link[0]}=${clickedPage - 1}`);
    }
  }

  return (
    <div className="pagination-custom">
      <button
        className="pagination-custom__prev"
        disabled={clickedPage === 1}
        onClick={handleClickPrev}
      >
        Prev
      </button>
      <div className="pagination-custom__numbers">
        {array.map((it, index) => {
          if (clickedPage < 8) {
            if (index < 14) {
              return (
                <PaginationButton
                  key={index}
                  num={index + 1}
                  clickedPage={clickedPage}
                  setClickedPage={setClickedPage}
                />
              );
            }
            if (index === 14) {
              return (
                <PaginationButton
                  key={index}
                  num="..."
                  clickedPage={clickedPage}
                  setClickedPage={setClickedPage}
                />
              );
            }
          } else {
            if (clickedPage - 8 < index && index < clickedPage + 7) {
              return (
                <PaginationButton
                  key={index}
                  num={index + 1}
                  clickedPage={clickedPage}
                  setClickedPage={setClickedPage}
                />
              );
            }
            if (index === clickedPage + 8) {
              return (
                <PaginationButton
                  key={index}
                  num="..."
                  clickedPage={clickedPage}
                  setClickedPage={setClickedPage}
                />
              );
            }
          }

          if (index === array.length - 1) {
            return (
              <PaginationButton
                key={index}
                num={index + 1}
                clickedPage={clickedPage}
                setClickedPage={setClickedPage}
              />
            );
          }
        })}
      </div>
      <button
        onClick={handleClickNext}
        className="pagination-custom__prev"
        disabled={clickedPage === array.length + 1}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationCustom;
