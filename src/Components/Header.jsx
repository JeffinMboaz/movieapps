import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <>
    <Navbar expand="lg" fixed="top" bg="dark" variant="dark" className="text-uppercase fw-bold">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><h4>Imax</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/tvshows">TV Shows</Nav.Link>
            <Nav.Link as={Link} to="/topmovies">Top Movies</Nav.Link>
            <Nav.Link as={Link} to="/topshows">Top Shows</Nav.Link>
          </Nav>
          
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search..." className="me-2 rounded-pill" />
            <Button variant="outline-info">Search</Button>
          </Form>
         
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
 
    </>
  );
 
}

export default Header;
