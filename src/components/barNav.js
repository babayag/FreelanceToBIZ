import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export class BarNav extends Component
{
    render(){
        return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}