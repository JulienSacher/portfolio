import React, { useContext } from "react";
import "./Header.css";
import logo from "../img/logo-light.png";
import { Navbar, Nav } from "react-bootstrap";
import { links } from "../data";
import Toggle from "./Toggle";

function Header() {

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
      <Navbar collapseOnSelect expand="lg" fixed="top" className="test">
        <img className="header__logo" src={logo} alt="smooth scroll" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {links.map((link) => {
              return (
                <Nav.Link
                  href={link.url}
                  key={link.id}
                  className="header__link pl-4"
                  onClick={handleClick}
                >
                  {link.text}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="mr-4">
            <Toggle />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
