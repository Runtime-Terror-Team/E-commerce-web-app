import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Home",
    path: "/about",
  },
  {
    display: "Men",
    path: "/about",
  },

  {
    display: "Women",
    path: "/about",
  },
  {
    display: "Kids",
    path: "/about",
  },

  {
    display: "Accessories",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Instagram",
    path: "/about",
  },
  {
    display: "Facebook",
    path: "/about",
  },
  {
    display: "LinkedIN",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Phone no.</div>
            <div className="footer__content">
              <p>
                Run <strong> 0123456789</strong>
              </p>
              <p>
                Time <strong> 0123456789</strong>
              </p>
              <p>
                Terror <strong> 0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Products</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Social links</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>Coming soon everywhere</p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
