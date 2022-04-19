import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button} from 'react-bootstrap'
import CartWidget from '../backups/CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'
//Navbar function containing component to walk around aplication.
export default function NavbarComp({categories})  {
    const [searchKey,setSearchKey] = useState('Buscar producto')
    function handleSearch(e){
        setSearchKey(e.target.value)
    }
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
                    {categories.map((c) => (<NavDropdown.Item 
                    href={`/category/${c.category}`}>{c.category}</NavDropdown.Item>
                    ))}
                    
                    
                    
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Contacto
                    </Nav.Link>
                </Nav>
                <CartWidget  />
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder={`${searchKey}`}
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                    />
                    <Link to={`/search/${searchKey} `} className="btn btn-primary" >Sign up</Link>
                </Form>
                </Navbar.Collapse>
                </Container>
        </Navbar>
      </div>
    )
  
}
