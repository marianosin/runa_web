import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container} from 'react-bootstrap'
import CartWidget from '../backups/CartWidget'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react'
import { CartContext } from '../cart/CartContext'
import { useContext, useEffect } from 'react'
//Navbar function containing component to walk around aplication.
export default function NavbarComp({categories})  {
    const {cart} = useContext(CartContext)
    
    const [searchKey,setSearchKey] = useState('Buscar producto')
    function handleSearch(e){
        setSearchKey(e.target.value)
    }
    

    /*sum of elements in cart */
    const [sum, setSum] = useState(0)

    //Using useEffetct to render component as it changes
    useEffect(() => {
        let auxSum = 0

        for (let index = 0; index < cart.length; index++) {
            auxSum = auxSum + cart[index].quantity
        }
        setSum(auxSum)
    }, [cart])


    return (
      <div className='NavBar'>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                    <LinkContainer to={'/'}><Navbar.Brand href="#">Runa Joyas</Navbar.Brand></LinkContainer>
                    
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                            <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                                </LinkContainer>
                            <LinkContainer to={"/nosotros"}>
                                <Nav.Link >Nosotros</Nav.Link>
                            </LinkContainer>
                            
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <LinkContainer to={'/category/prendedores'}>
                                <Nav.Link >Prendedores</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/category/collares'}>
                            <Nav.Link >Collares</Nav.Link>
                            </LinkContainer>
                            {/*<LinkContainer to={'/category/otros'}>
                            <Nav.Link >Otros</Nav.Link>
                            </LinkContainer>*/}
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Contacto
                        </Nav.Link>
                    </Nav>
                    {(cart.length > 0) ? <LinkContainer to={'/cart'}><Nav.Link href={'/cart'}><CartWidget  />({sum}) </Nav.Link></LinkContainer> : null}
                    
                    
                    
                    <Form className="d-flex" style={{display: 'none'}}>
                        <FormControl
                        type="search"
                        placeholder={`${searchKey}`}
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearch}
                        style={{display: 'none'}}
                        />
                        <Link to={`/search/${searchKey} `} className="btn btn-primary" style={{display: 'none'}}>Buscar</Link>
                    </Form>
                    </Navbar.Collapse>
                    
            </Container>
        </Navbar>
      </div>
    )
  
}
