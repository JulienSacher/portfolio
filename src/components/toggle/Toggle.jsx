import React, { useContext } from "react";
import "./Toggle.css";
import { ThemeContext } from "../../context/ThemeContext";

function Toggle() {
    const {toggleTheme, theme} = useContext(ThemeContext)
     return (
        <div
        onClick={toggleTheme}
        className={theme ? 'toggle goDark' : 'toggle goLight'}
        >
            {theme ? "light" : "dark"}
        </div>
    )
}

export default Toggle;
