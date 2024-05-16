import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Book a HomeStay</Nav.Link>
            <Nav.Link href="#deets">Artistry</Nav.Link>
            <Nav.Link href="/handloom">Weaver's Handloom</Nav.Link>
            <Nav.Link href="#deets">Tapovan</Nav.Link>
            <Nav.Link href="#deets">Urgam</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Urgam
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
