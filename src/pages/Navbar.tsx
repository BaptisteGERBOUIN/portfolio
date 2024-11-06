import React from 'react';
import '../styles/navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" fixed="top" className='navbar'>
      <Container className="justify-content-center">
        <Navbar.Brand href="#accueil" className="mx-auto">
          Mon Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100">
            <Nav.Link href="#accueil">Accueil</Nav.Link>
            <Nav.Link href="#projets">Projets</Nav.Link>
            <Nav.Link href="#parcours">Parcours</Nav.Link>
            {/* <Nav.Link href="#interet">Intérêts</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
