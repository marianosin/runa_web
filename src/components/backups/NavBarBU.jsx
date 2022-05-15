import { Navbar, Nav, NavDropdown,  Container} from 'react-bootstrap'
import CartWidget from '../backups/CartWidget'

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
                    {(cart.length > 0) ? <CartWidget  />({sum})  : null}
                    </Navbar.Collapse>
            </Container>
        </Navbar>