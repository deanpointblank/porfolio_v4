import React, { Component } from 'react';
import { Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GrLinkedin, GrGithub, GrTwitter, GrMail } from 'react-icons/gr'


export default class Menu extends Component {

    render(){
        return(
                <Navbar bg="light" expand="lg" fluid>
                <Navbar.Brand href="/">Dean Betty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Navbar.Text className="d-flex flex-row">
                        <a className="mr-2" href="https://github.com/deanpointblank"><GrGithub /></a> <a className="mr-2 ml-2" href="https://www.linkedin.com/in/deanbetty/"><GrLinkedin /></a> <a className="mr-2 ml-2" href="https://twitter.com/TheDomDonDada"><GrTwitter /></a><a className="mr-2 ml-2" href="#Email"><GrMail /></a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )
    }
}