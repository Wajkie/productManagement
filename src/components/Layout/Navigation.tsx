import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand><h1>Product Management</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/">🏡 Home</Nav.Link>
                        <Nav.Link as={NavLink} end to="/products">🍭 Products</Nav.Link>
                        <Nav.Link as={NavLink} end to="/suppliers">🧑‍🏭 Suppliers</Nav.Link>
                        <Nav.Link as={NavLink} end to="/deliveries">🚛 Deliveries</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;