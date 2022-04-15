import React, { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./paginationButton.scss";

interface PaginationButtonProps {
  num: number | string;
  clickedPage: number;
  setClickedPage: any;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  num,
  clickedPage,
  setClickedPage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    const link = location.pathname.split("=");
    setClickedPage(num);
    navigate(`${link[0]}=${num}`);
  }

  return (
    <button
      onClick={handleClick}
      className={
        clickedPage === num
          ? "pagination-button pagination-button_active"
          : "pagination-button"
      }
    >
      {num}
    </button>
  );
};

export default PaginationButton;
