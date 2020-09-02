import React, { Component } from 'react';
import { Row, Nav, Navbar } from 'react-bootstrap';

export default class Navbar extends Component {

    render(){
        return(
            <Row>
                <Navbar bg="light" expand="lg" defaultActiveKey="/">
                    <Navbar.Brand href="#"><span className="underlined">Dean Betty</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Projects</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        )
    }
}