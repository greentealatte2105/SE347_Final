import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.styles.css';

const NavbarBookCategory = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary custom-margin-top">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="active-link">
                    <NavDropdown title="Our shelves" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.4">Art</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Children Book</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Classic</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Fiction</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Memoir</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Poetry</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Feel Good</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home" className="active-link">On Shelves</Nav.Link>
                    <Nav.Link href="#link" className="active-link">The goods shelf</Nav.Link>
                    <Nav.Link href="" className="active-link">The Mag Shelf</Nav.Link>
                    <Nav.Link href="" className="active-link">The Junior Bookshelf</Nav.Link>
                    <Nav.Link href="" className="active-link">The BookShelf Journal</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default NavbarBookCategory;