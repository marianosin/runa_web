import React from 'react'
import { Navbar, Nav, NavDropdown,  Container} from 'react-bootstrap'
import CartWidget from '../backups/CartWidget'
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react'
import { CartContext } from '../cart/CartContext'
import { useContext, useEffect } from 'react'
//Navbar function containing component to walk around aplication.
export default function NavbarComp()  {
    const {cart} = useContext(CartContext)

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
                    <LinkContainer to={'/'}><Navbar.Brand >Runa Joyas</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                            <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                                </LinkContainer>

                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <LinkContainer to={'/category/prendedores'}>
                                <Nav.Link >Prendedores</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/category/collares'}>
                            <Nav.Link >Collares</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    {(cart.length > 0) ? <LinkContainer to={'/cart'}><Nav.Link href={'/cart'}><CartWidget  />({sum}) </Nav.Link></LinkContainer> : null}
                    </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
  
}
