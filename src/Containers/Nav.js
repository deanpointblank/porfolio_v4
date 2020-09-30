import React, { Component } from 'react';
import { Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GrLinkedin, GrGithub, GrTwitter, GrMail, GrMenu } from 'react-icons/gr'
import { NavLink } from 'react-router-dom';


export default class Menu extends Component {
    constructor(){
        super()
        this.state = {
            hidden: 'hidden'
        }
    }

    toggleNav(event){
        event.preventDefault()
        this.setState({
            hidden: this.state.hidden === '' ? 'hidden' : ''
        })
    }

    render(){
        return(
            <>
                <Navbar bg="light" expand="lg" fluid className="justify-content-between">
                <NavLink className="navbar-brand" to="/">Dean Betty</NavLink>
                    <span onClick={event => this.toggleNav(event)}><GrMenu /></span>
                </Navbar>
                <div className={'full-screen flex-container-center ' + this.state.hidden}>
                    <span className="nav-close" onClick={event => this.toggleNav(event)}>X</span>
                    <Nav activeKey="/home" className="flex-column">
                        <NavLink className="nav-link" to="/" activeClassName="selected">Home</NavLink>
                        <NavLink className="nav-link" to="/about" activeClassName="selected">About</NavLink>
                        <NavLink className="nav-link" to="/portfolio" activeClassName="selected">Portfolio</NavLink>
                        <NavLink className="nav-link" to="/blog" activeClassName="selected">Blog</NavLink>
                        <NavLink className="nav-link" to="#" activeClassName="selected">Contact</NavLink>
                        <Navbar.Text >
                        <a className="mr-2" href="https://github.com/deanpointblank"><GrGithub /></a> <a className="mr-2 ml-2" href="https://www.linkedin.com/in/deanbetty/"><GrLinkedin /></a> <a className="mr-2 ml-2" href="https://twitter.com/TheDomDonDada"><GrTwitter /></a><a className="mr-2 ml-2" href="#Email"><GrMail /></a>
                        </Navbar.Text>
                    </Nav>
                </div>
            </>
        )
    }
}