import React, { FC } from "react";
import NoRegisterWrapper from "../components/UI/wrapper/NoRegisterWrapper/NoRegisterWrapper";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";

const MyLibrary: FC = () => {
  const { isAuth } = useTypedSelector((s) => s.authReducer);

  return (
    <div className="_container">
      {isAuth ? <div>MyLibrary</div> : <NoRegisterWrapper />}
    </div>
  );
};

export default MyLibrary;
