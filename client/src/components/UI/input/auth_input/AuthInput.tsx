import React, { ChangeEvent, FC } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import "./authInput.scss";

interface AuthInputProps {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
}

const AuthInput: FC<AuthInputProps> = ({
  type,
  label,
  placeholder,
  handleChange,
  name,
  value,
}) => {
  const { emptyFieldError } = useTypedSelector((s) => s.authReducer);
  return (
    <div className="auth-input">
      <div className="auth-input__label">{label}</div>
      <input
        className="auth-input__input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, name)}
      />
      {emptyFieldError && value === "" && (
        <div className="auth-input__error">Please fill in all fields !!!</div>
      )}
    </div>
  );
};

export default AuthInput;
