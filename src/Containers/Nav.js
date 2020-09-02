import React, { Component } from 'react';
import { Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default class Menu extends Component {

    render(){
        return(
                <Navbar bg="light" expand="lg" fluid>
                <Navbar.Brand href="#home">Dean Betty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#Blog">Blog</Nav.Link>
                        <Navbar.Text>
                            <a href="#LinkedIn">LinkedIn</a> <a href="#Twitter">Twitter</a> <a href="#Email">Email</a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )
    }
}