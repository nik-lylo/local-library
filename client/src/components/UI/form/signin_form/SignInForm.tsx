import React, {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { hasObjectEmptyField } from "../../../../lib/helper/hasObjectEmptyField";
import { useActions } from "../../../../lib/hooks/useActions";
import GoogleButton from "../../button/google_button/GoogleButton";
import AuthInput from "../../input/auth_input/AuthInput";
import "./signInForm.scss";

const SignInForm: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "lulnuk1995@gmail.com",
    password: "199519",
  });
  const {
    setTypeRegisterForm,
    setIsRegisterPopupOpen,
    setEmptyFieldError,
    setFetchSignUp,
  } = useActions();

  function handleChange(e: ChangeEvent<HTMLInputElement>, name: string) {
    setFormInput((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  }

  function handleClickClosePopup() {
    setEmptyFieldError(false);
    setIsRegisterPopupOpen(false);
    setTypeRegisterForm(null);
  }

  function handleClickNavigate(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setTypeRegisterForm("signup");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isEmpty = hasObjectEmptyField(formInput);
    if (isEmpty) {
      setEmptyFieldError(true);
      return;
    }
    setEmptyFieldError(false);
    // setFetchSignUp();
  }

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div className={mounted ? "signin-form signin-form__open" : "signin-form"}>
      <div
        className="signin-form__close icon-cross"
        onClick={handleClickClosePopup}
      ></div>
      <form className="signin-form__form" onSubmit={handleSubmit}>
        <div className="signin-form__title">Sign In</div>
        <div className="signin-form__input">
          <AuthInput
            handleChange={handleChange}
            value={formInput.email}
            name="email"
            label="E-mail*"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="signin-form__input">
          <AuthInput
            handleChange={handleChange}
            value={formInput.password}
            name="password"
            label="Password*"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="signin-form__button">Sign In</button>
      </form>
      <div className="signin-form__or">
        <span>or</span>
      </div>
      <div className="signin-form__google">
        <GoogleButton />
      </div>

      <div className="signin-form__ask">
        Don't have an account?
        <a href="" onClick={handleClickNavigate}>
          Sign up here
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
