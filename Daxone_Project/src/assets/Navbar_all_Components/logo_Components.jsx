import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img_ folder/logo-1.png'

function Logo_Component() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home "className='img_logo'>
            <img
              src={img}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export  {Logo_Component};