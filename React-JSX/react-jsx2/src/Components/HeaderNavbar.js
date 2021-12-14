import React from 'react';
import logo from '../Assets/pikkanode.png';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function HeaderNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" width={70} height={35} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#gettingStarted">Getting Started</Nav.Link>
                    <Nav.Link href="#components">Components</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#discord">Discord</Nav.Link>
                    <Nav.Link href="#github">Github</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar;
