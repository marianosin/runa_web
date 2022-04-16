import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button} from 'react-bootstrap'
import CartWidget from '../backups/CartWidget'
import { Link } from 'react-router-dom'

//Navbar function containing component to walk around aplication.
export default function NavbarComp()  {
  
    return (
      <div className='NavBar'>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to={'/'} style={{textDecoration:'none'}} > <Navbar.Brand href="#">Runa Joyas</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href={'/'}>Home</Nav.Link>
                    <Nav.Link href={'/nosotros'}>Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href={'/category/collares'}>Collares</NavDropdown.Item>
                    <NavDropdown.Item >Pulseras</NavDropdown.Item>
                    <NavDropdown.Item >Colgantes</NavDropdown.Item>
                    <NavDropdown.Item >Aros</NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                        <NavDropdown.Item href='/category/all' >
                            
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
