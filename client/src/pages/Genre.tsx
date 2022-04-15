import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import GenrePagination from "../components/genre/pagination/GenrePagination";
import SnackbarCustom from "../components/UI/snackbar/SnackbarCustom";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { SnackbarPropsDefault } from "../lib/utilits/DefaultValue";
import "../scss/page/genre.scss";

const Genre: FC = () => {
  const { setSnackbarProps } = useActions();
  const { snackbarProps } = useTypedSelector((s) => s.appReducer);

  function handleCloseSnackbar() {
    setSnackbarProps(SnackbarPropsDefault);
  }

  return (
    <div className="genre">
      <Outlet />
      <GenrePagination />
      <SnackbarCustom
        text={snackbarProps.text}
        open={snackbarProps.open}
        status={snackbarProps.status}
        vertical="top"
        horizontal="right"
        handleClose={handleCloseSnackbar}
      />
    </div>
  );
};

export default Genre;
