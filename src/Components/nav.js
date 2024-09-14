// bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../images/Logo Icon 1.svg'

export default function Navgation() {
    return(
        <div>
             <Navbar  expand="lg" className="bg-body-black">
      <Container >
        <Navbar.Brand className='text-white' href="#">
            <img style={{marginRight:'10px'}} src={icon} alt="" />
            Enver
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Services</Nav.Link>    
            <Nav.Link className='text-white' href="#" >Our Project</Nav.Link>
            <Nav.Link className='text-white' href="#" >About us</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className='text-white border-white'>Contact Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
  }