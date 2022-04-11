import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button} from 'react-bootstrap'
import CartWidget from '../backups/CartWidget'
import { Link } from 'react-router-dom'

//Navbar function containing component to walk around aplication.
export default function NavbarComp()  {
  
    return (
      <div className='NavBar'>
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Runa Joyas</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link ><Link to={'/'}>Home</Link></Nav.Link>
                    <Nav.Link ><Link to={'/nosotros'}>Nosotros</Link></Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item ><Link to={'/dynamicelement/collares'}>Collares</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Pulseras</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Colgantes</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Aros</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Todos los productos
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Contacto
                    </Nav.Link>
                </Nav>
                <CartWidget  />
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Container>
        </Navbar>
      </div>
    )
  
}
