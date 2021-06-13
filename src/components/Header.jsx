import React from "react";
import "./Header.css";
import logoLight from "../img/logo-light.png";
import { Navbar, Nav } from "react-bootstrap";
import Toggle from "./Toggle";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import "flag-icon-css/css/flag-icon.min.css";
import i18next from "i18next";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function Header() {
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
    });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="header__container d-flex"
    >
      <Navbar.Brand href="#home">
        <img
          className="header__logo ml-2"
          src={logoLight}
          alt="smooth scroll"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link
            href="#home"
            key={1}
            className="header__link text-center"
            onClick={handleClick}
          >
            {t("home")}
          </Nav.Link>
          <Nav.Link
            href="#about"
            key={2}
            className="header__link text-center"
            onClick={handleClick}
          >
            {t("about_me")}
          </Nav.Link>
          <Nav.Link
            href="#work"
            key={3}
            className="header__link text-center"
            onClick={handleClick}
          >
            {t("my_work")}
          </Nav.Link>
          <Nav.Link
            href="#contact"
            key={4}
            className="header__link text-center"
            onClick={handleClick}
          >
            {t("contact_me")}
          </Nav.Link>
        </Nav>
        <Nav className="mr-4 d-flex align-items-center">
          {languages.map(({ code, name, country_code }) => (
            <Button
              className="mb-2 lang__button"
              key={country_code}
              onClick={() => i18next.changeLanguage(code)}
            >
              <span className={`flag-icon  flag-icon-${country_code}`}></span>
            </Button>
          ))}

          <Toggle />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
