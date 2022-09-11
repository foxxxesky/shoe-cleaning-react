import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Shoe Cleaning</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>HOME</Nav.Link>
            <Nav.Link href='#services'>SERVICES</Nav.Link>
            <Nav.Link href='#about'>ABOUT</Nav.Link>
            <Nav.Link href='#testimonial'>TESTIMONIAL</Nav.Link>
            <Nav.Link href='#article'>ARTICLE</Nav.Link>
          </Nav>
          <Button>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;