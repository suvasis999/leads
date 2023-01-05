import { Nav, Navbar } from "react-bootstrap";


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">LEADS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Clients</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}
 
export default Header;