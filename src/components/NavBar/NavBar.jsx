import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar
      className="mi-navbar"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Link to="/" className="navbar-brand">
          Jewelryshop
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-5">
            <NavLink to="./category/earrings" className="nav-link">
              Earrings
            </NavLink>
            <NavLink to="./category/rings" className="nav-link">
              Rings
            </NavLink>
            <NavLink to="./category/necklaces" className="nav-link">
              Necklaces
            </NavLink>
          </Nav>

          <Nav className="ms-auto">
            <CartWidget className="cartWidget" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
