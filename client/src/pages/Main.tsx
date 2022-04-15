import React, { FC } from "react";
import "../scss/page/main.scss";
import MainBody from "../components/main/body/MainBody";
import MainHeader from "../components/main/header/MainHeader";
import SnackbarCustom from "../components/UI/snackbar/SnackbarCustom";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { useActions } from "../lib/hooks/useActions";
import { SnackbarPropsDefault } from "../lib/utilits/DefaultValue";

const Main: FC = () => {
  const { snackbarProps } = useTypedSelector((s) => s.appReducer);
  const { setSnackbarProps } = useActions();

  function handleSnackbarClose() {
    setSnackbarProps(SnackbarPropsDefault);
  }

  return (
    <div className="main">
      <MainHeader />
      <MainBody />
      <SnackbarCustom
        text={snackbarProps.text}
        open={snackbarProps.open}
        status={snackbarProps.status}
        horizontal="right"
        vertical="top"
        handleClose={handleSnackbarClose}
      />
    </div>
  );
};

export default Main;
