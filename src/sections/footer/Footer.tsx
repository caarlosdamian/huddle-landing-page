import React, { useState } from "react";
import logo from "../../assets/logo-white.svg";
import facebook from "../../assets/facebook.svg";
import facebookPurple from "../../assets/facebook-purple.svg";
import twitter from "../../assets/twitter.svg";
import twitterPurple from "../../assets/twitter-purple.svg";
import instagram from "../../assets/instagram.svg";
import instagramPurple from "../../assets/instagram-purple.svg";
import { footerItems, footerItems2, footerItems3 } from "../../utils/data";
import "./Footer.scss";

export const Footer = () => {
  const [isMouseHover, setIsMouseHover] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
  });

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <img className="footer-top-img" src={logo} alt="logoFooter" />
      </div>
      <div className="footer-bottom">
        <div className="lis-item-container">
          {footerItems.map((item) => (
            <div className="list-item-wrapper" key={item.id}>
              <img src={item.img} alt="" className="list-item-img" />
              <span className="list-item-text">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="list-undeline-items">
          {footerItems2.map((item) => (
            <React.Fragment key={item.id}>
              <span className="list-item-text-undeline">{item.title}</span>
            </React.Fragment>
          ))}
        </div>
        <div className="list-undeline-items">
          {footerItems3.map((item) => (
            <React.Fragment key={item.id}>
              <span className="list-item-text-undeline">{item.title}</span>
            </React.Fragment>
          ))}
        </div>
        <div className="icon-footer-container">
          <div className="icon-wrapper">
            <img
              onMouseEnter={() =>
                setIsMouseHover({ ...isMouseHover, facebook: true })
              }
              onMouseLeave={() =>
                setIsMouseHover({ ...isMouseHover, facebook: false })
              }
              src={(isMouseHover.facebook && facebookPurple) || facebook}
              alt="facebook"
              className="icon-img facebook"
            />
            <img
              onMouseEnter={() =>
                setIsMouseHover({ ...isMouseHover, twitter: true })
              }
              onMouseLeave={() =>
                setIsMouseHover({ ...isMouseHover, twitter: false })
              }
              src={(isMouseHover.twitter && twitterPurple) || twitter}
              alt="twitter"
              className="icon-img twitter"
            />
            <img
              src={(isMouseHover.instagram && instagramPurple) || instagram}
              onMouseEnter={() =>
                setIsMouseHover({ ...isMouseHover, instagram: true })
              }
              onMouseLeave={() =>
                setIsMouseHover({ ...isMouseHover, instagram: false })
              }
              alt="instagram"
              className="icon-img instagram"
            />
          </div>
          <span className="copyright-footer">
            © Copyright 2018 Huddle. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
