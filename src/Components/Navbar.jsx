import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Motohouse</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <NavDropdown title="Marcas" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3"></NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              KAWASAKI
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              KTM
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              BMW
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2">Clientes</Nav.Link>
          <Nav.Link href="#action2">Nosotros</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;
