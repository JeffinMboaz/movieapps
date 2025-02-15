import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" fixed="top" bg="dark" variant="dark" className=" text-uppercase fw-bold">
      <Container fluid >
        <Navbar.Brand href="/"><h4>Imax</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
            <Nav.Link href="/" className='text-white '>Home</Nav.Link>
            <Nav.Link href="/movies" className='text-white '>Movies</Nav.Link>
            <Nav.Link href="/tvshows" className='text-white '>Tv shows</Nav.Link>
            <Nav.Link href="/topmovies" className='text-white '>Top Movies</Nav.Link>
            <Nav.Link href="/topshows" className='text-white '>Top shows</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search movies, TV shows..." className="me-2 rounded-pill" aria-label="Search" />
            <Button variant="outline-info">Search</Button>
          </Form>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
