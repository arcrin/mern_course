import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect={true}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>TAG Dashboard</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link ><i className={'fas fa-shopping-cart'}/>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link ><i className={'fas fa-user'}/>Sign In</Nav.Link>
                            </LinkContainer>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        {/*<Form inline>*/}
                        {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                        {/*    <Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
