import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="_container">
        <div className="footer__container">
          <div className="footer__title"> Join us</div>
          <div className="footer__underline"></div>
          <div className="footer__content">
            <a href="" className="footer__item icon-telegram"></a>
            <a href="" className="footer__item icon-instagram"></a>
            <a href="" className="footer__item icon-facebook"></a>
            <a href="" className="footer__item icon-github"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
