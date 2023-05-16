import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const navBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
        <Navbar.Brand className="m-2" as={Link} to="moneyconverter-react/">
            <FaHome />
        </Navbar.Brand>
        <Navbar.Toggle className="m-2" aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
            <Nav.Link className="m-2" as={Link} to="moneyconverter-react/inicio">
                Inicio
            </Nav.Link>
            <Nav.Link className="m-2" as={Link} to="moneyconverter-react/cambia">
                Cambia
            </Nav.Link>
            <Nav.Link className="m-2" as={Link} to="moneyconverter-react/contacto">
                Contacto
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};
export default navBar