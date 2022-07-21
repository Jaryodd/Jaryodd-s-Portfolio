import React from 'react';
import { NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Container, Nav,} from "react-bootstrap";



export default function navbar() {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Jaryodd's Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#aboutme">About me</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        );
    }
    
    // <div>
    //     <NavLink
    //         exact
    //         to="/"
    //     >
    //         Home
    //     </NavLink>
    //     <NavLink
    //         exact
    //         to="/portfolio"
    //     >
    //         Portfolio
    //     </NavLink>
    //     <NavLink
    //         exact
    //         to="/aboutme"
    //     >
    //         Aboutme
    //     </NavLink>
    //     <NavLink
    //         exact
    //         to="/contact"
    //     >
    //         Contact
    //     </NavLink>
    // </div>