import React, { Component } from 'react';
import { Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GrLinkedin, GrGithub, GrTwitter, GrMail } from 'react-icons/gr'


export default class Menu extends Component {

    render(){
        return(
                // <Navbar bg="light" expand="lg" fluid>
                // <Navbar.Brand href="/">Dean Betty</Navbar.Brand>
                // <Navbar.Toggle aria-controls="basic-navbar-nav" />
                // <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                //     <Nav className="">
                //             <Nav.Link href="/about">About</Nav.Link>
                //             <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                //             <Nav.Link href="/blog">Blog</Nav.Link>
                //             <Navbar.Text >
                //             <a className="mr-2" href="https://github.com/deanpointblank"><GrGithub /></a> <a className="mr-2 ml-2" href="https://www.linkedin.com/in/deanbetty/"><GrLinkedin /></a> <a className="mr-2 ml-2" href="https://twitter.com/TheDomDonDada"><GrTwitter /></a><a className="mr-2 ml-2" href="#Email"><GrMail /></a>
                //             </Navbar.Text>
                //     </Nav>
                // </Navbar.Collapse>
                // </Navbar>
                <div className="full-screen flex-container-center">
                    <h1>Test Content</h1>
                </div>
        )
    }
}