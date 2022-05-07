import React, { FC } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import "./noRegisterWrapper.scss";

const NoRegisterWrapper: FC = () => {
  const { setIsRegisterPopupOpen, setTypeRegisterForm } = useActions();
  function handleClickSignIn() {
    setTypeRegisterForm("signin");
    setIsRegisterPopupOpen(true);
  }
  function handleClickSignUp() {
    setTypeRegisterForm("signup");
    setIsRegisterPopupOpen(true);
  }
  return (
    <div className="no-register-wrapper">
      <div className="no-register-wrapper__content">
        <div className="no-register-wrapper__title">Local Library</div>
        <div className="no-register-wrapper__subtitle">
          You can store your books in your personal library.If you want to enter
          your library please log in.
        </div>

        <div className="no-register-wrapper__buttons">
          <button
            className="no-register-wrapper__signin"
            onClick={handleClickSignIn}
          >
            Sign In
          </button>
          <button
            className="no-register-wrapper__signup"
            onClick={handleClickSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoRegisterWrapper;
