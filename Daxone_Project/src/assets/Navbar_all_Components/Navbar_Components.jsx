import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Logo_Component} from './logo_Components';
import icon from '../img_ folder/footer-search.png'

function Navbar_comonent() {
  return (
    <Navbar expand="lg" className="header-main">
      <Container>
        <Logo_Component />
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className='link-nav'>Home</Nav.Link>
            <Nav.Link href="#" className='link-nav'>Shop</Nav.Link>
            <Nav.Link href="#" className='link-nav'>Mens</Nav.Link>
            <Nav.Link href="#" className='link-nav'>Page</Nav.Link>
            <Nav.Link href="#" className='link-nav'>Blog</Nav.Link>
            <Nav.Link href="#" className='link-nav'>Contact</Nav.Link>
            <Nav.Link href="#" className='items'>2Items</Nav.Link>
            <Nav.Link href="#" className='link-nav'> <img
              src={icon}
            /></Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navbar_comonent};