
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Data from './Data';
import './css/navbar.css'
function Navbars() {
    const data = Data()
    const { user: { about: { name } } } = data || { user: { about: {} } }
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbars ">
      <Container>
        <Navbar.Brand href="#"><h3 className='name fw-bold'>{name}</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link className='link fw-bold ' href="#home">home</Nav.Link>
            <Nav.Link href="#about" className='link fw-bold'>about</Nav.Link>
            <Nav.Link href="#services" className='link fw-bold'>service</Nav.Link> 
            <Nav.Link href="#project" className='link fw-bold'>Project</Nav.Link> 
            <Nav.Link href="#skill" className='link fw-bold'>skills</Nav.Link>
            <Nav.Link href="#tesimonials" className='link fw-bold'>Tesimonials</Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;