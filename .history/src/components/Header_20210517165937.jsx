import React from "react";
import './Header.css';
import logo from '../img/logo-light.png';
import { Navbar, Nav, Figure } from 'react-bootstrap';
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

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;
        
        window.scrollTo({
            left: 0,
            top: location
        })
    };
  
    return (
            <Navbar collapseOnSelect expand="lg" fixed="top" className="test">
                <Figure className="position-relative">
                            <Figure.Image
                                alt=""
                                src={logo}
                                className="img-fluid"
                            />
                </Figure>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        {links.map((link)=>{
                            return ( 
                                <Nav.Link href={link.url} key={link.id} className="header__link pl-4" onClick={handleClick}>{link.text}</Nav.Link>
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
            </Navbar>  
    )
}

export default Header

