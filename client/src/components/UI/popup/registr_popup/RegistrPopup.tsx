import React, { FC, useEffect } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import SignInForm from "../../form/signin_form/SignInForm";
import SignUpForm from "../../form/signup_form/SignUpForm";
import "./registrPopup.scss";

const RegistrPopup: FC = () => {
  const { isRegistrPopupOpen, typeRegisterForm } = useTypedSelector(
    (s) => s.authReducer
  );
  const { setIsRegisterPopupOpen, setTypeRegisterForm, setEmptyFieldError } =
    useActions();

  function handleClosePopup() {
    setEmptyFieldError(false);
    setTypeRegisterForm(null);
    setIsRegisterPopupOpen(false);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (isRegistrPopupOpen) {
      body?.classList.add("_lock");
    } else {
      body?.classList.remove("_lock");
    }
  }, [isRegistrPopupOpen]);

  return (
    <div
      className={
        isRegistrPopupOpen
          ? "registr-popup registr-popup__open"
          : "registr-popup"
      }
    >
      <div className="registr-popup__close" onClick={handleClosePopup}></div>
      <>
        {typeRegisterForm === "signin" ? (
          <SignInForm />
        ) : typeRegisterForm === "signup" ? (
          <SignUpForm />
        ) : null}
      </>
    </div>
  );
};

export default RegistrPopup;
