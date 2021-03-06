import React, { useState } from "react";
import "./Header.css";
import logo from "../../Pics/logo.png";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  const [Mobile, setMobile] = useState(false);
  return (
    <header className="header">
      <div className="container d_flex">
        <div>
          <a href="#">
            <img className="logo-sam" src={logo} alt="logo" />
          </a>
        </div>

        <div className="navlink">
          <ul
            className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
            onClick={() => setMobile(false)}
          >
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>

            <li>
              <a href="#dance">My Dancing Arena</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className=" fa fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
