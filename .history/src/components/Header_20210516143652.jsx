import React from "react";
import './Header.css';
import logo from '../img/logo-light.png';
import { Navbar, Nav } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import { links } from '../data'

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
            <Navbar collapseOnSelect expand="lg" fixed="top">
                <div className="test">
                <img className="header__logo" src={logo} alt="smooth scroll"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        {links.map((link)=>{
                            return ( 
                                <Nav.Link href={link.url} key={link.id} className="header__link pl-4">{link.text}</Nav.Link>
                            )
                        })}
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
                </div>
                <div className="header__border"></div> 
            </Navbar>  
        </div>
    )
}

export default Header

