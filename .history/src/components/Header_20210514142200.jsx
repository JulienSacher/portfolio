import React from "react";
import './Header.css';
import logo from '../img/logo-light.png';
import { Navbar, Nav } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';

function Header() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return (
        <div className="header__container">
            <Navbar collapseOnSelect expand="lg">
                <img className="header__logo" src={logo} alt="smooth scroll"/>
                {/* Link */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="header__link">Home</Nav.Link>
                        <Nav.Link className="header__link pl-4">About Me</Nav.Link>
                        <Nav.Link className="header__link pl-4">My Work</Nav.Link>
                        <Nav.Link className="header__link pl-4">Contact Me</Nav.Link>
                    </Nav>
                    <Nav className="pl-0">
                        <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                            
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                            
                            
                    </Nav>
                </Navbar.Collapse>
                        
                    
            </Navbar>
            <div className="header__border"></div>   
        </div>
    )
}

export default Header

