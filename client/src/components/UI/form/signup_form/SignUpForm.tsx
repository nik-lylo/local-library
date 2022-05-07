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
import { IAuthDto } from "../../../../lib/models/ICommon";
import GoogleButton from "../../button/google_button/GoogleButton";
import AuthInput from "../../input/auth_input/AuthInput";
import "./signUpForm.scss";

const SignUpForm: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [formInput, setFormInput] = useState<IAuthDto>({
    firstname: "",
    lastname: "",
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
    setIsRegisterPopupOpen(false);
    setTypeRegisterForm(null);
  }

  function handleClickNavigate(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setTypeRegisterForm("signin");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isEmpty = hasObjectEmptyField(formInput);
    if (isEmpty) {
      setEmptyFieldError(true);
      return;
    }
    setEmptyFieldError(false);
    setFetchSignUp(formInput);
  }

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  return (
    <div className={mounted ? "signup-form signup-form__open" : "signup-form"}>
      <div
        className="signup-form__close icon-cross"
        onClick={handleClickClosePopup}
      ></div>
      <form className="signup-form__form" onSubmit={handleSubmit}>
        <div className="signup-form__title">Sign Up</div>
        <div className="signup-form__input">
          <AuthInput
            handleChange={handleChange}
            value={formInput.firstname}
            name="firstname"
            label="First name*"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className="signup-form__input">
          <AuthInput
            handleChange={handleChange}
            value={formInput.lastname}
            name="lastname"
            label="Last name*"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div className="signup-form__input">
          <AuthInput
            handleChange={handleChange}
            value={formInput.email}
            name="email"
            label="E-mail*"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="signup-form__input">
          <AuthInput
            handleChange={handleChange}
            value={formInput.password}
            name="password"
            label="Password*"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="signup-form__button">Sign Up</button>
      </form>
      <div className="signup-form__or">
        <span>or</span>
      </div>
      <div className="signup-form__google">
        <GoogleButton />
      </div>

      <div className="signup-form__ask">
        If You have account.
        <a onClick={handleClickNavigate} href="">
          Sign in here
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
