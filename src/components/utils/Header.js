import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand">
          Redux Blog
        </Link>

        <Navbar.Toggle
          className="text-white bg-white d-none "
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link mx-md-3 text-underline-none">
              Home
            </Link>
            <Link to="/posts" className="nav-link mx-md-3 text-underline-none">
              Posts
            </Link>

            <Link to="/users" className="nav-link mx-md-3 text-underline-none">
              Users
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
