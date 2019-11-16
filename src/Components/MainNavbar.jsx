import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import './styles.css'

function MainNavbar({history}) {
    return (
        <div>
            <Navbar expand="lg" className="color3">
                <Navbar.Brand href="#home">LogoHere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link className="letterColorNavbar" onClick={() => history.push("/")}>Home</Nav.Link>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter (MainNavbar);
