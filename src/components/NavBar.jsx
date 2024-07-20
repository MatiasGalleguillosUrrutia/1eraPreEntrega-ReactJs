// Componentes Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Componentes
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <div className="bg-body-tertiary d-flex justify-content-center align-items-center">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Conócenos</Nav.Link>
                <NavDropdown title="Clases" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">1 Clase</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">2 Clase</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">3 Clases</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Clases Mensuales</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contáctanos</Nav.Link>
                <Nav.Link href="#link">Términos y condiciones</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
