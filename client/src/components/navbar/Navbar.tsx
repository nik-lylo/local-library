import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { RoutesEnum } from "../../router/RoutesEnum";
import AvatarCustom from "../UI/avatar/AvatarCustom";
import CustomInput from "../UI/input/custom_input/CustomInput";
import Logo from "../UI/logo/Logo";
import "./navbar.scss";

const Navbar: FC = () => {
  return (
    <nav className="navbar ">
      <div className="_container">
        {" "}
        <div className="navbar__flex">
          <Link to={RoutesEnum.MAIN} className="navbar__logo">
            <Logo />
          </Link>
          <div className="navbar__link link-navbar">
            <NavLink
              to={RoutesEnum.MAIN}
              className={({ isActive }) =>
                isActive
                  ? "link-navbar__item link-navbar__item_selected"
                  : "link-navbar__item"
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to={RoutesEnum.MY_LIBRARY}
              className={({ isActive }) =>
                isActive
                  ? "link-navbar__item link-navbar__item_selected"
                  : "link-navbar__item"
              }
            >
              My library
            </NavLink>
          </div>
          <CustomInput />
          <div className="navbar__registration registration-navbar">
            <button className="registration-navbar__login">Sign In</button>
            <div className="registration-navbar__avatar">
              <AvatarCustom url="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
