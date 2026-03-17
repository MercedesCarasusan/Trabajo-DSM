import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router"
import Logout from "../../../auth/Logout"
import { AuthContext } from "../../../auth/AuthContext"
import { useContext } from "react"

import "./header.css"

const Header = () => {

  const auth = useContext(AuthContext)

  const username = auth.email
    ? auth.email.split("@")[0].toUpperCase()
    : ""

  return (

    <Navbar expand="md" className="main-navbar">

      <Container>

        <Navbar.Brand as={Link} to="/" className="logo">
          🎬 CineScope
        </Navbar.Brand>

        <Nav className="me-auto nav-links">

          <Nav.Link as={Link} to="/">
            Catálogo
          </Nav.Link>

          <Nav.Link as={Link} to="/favorites">
            Favoritos
          </Nav.Link>

          <Nav.Link as={Link} to="/contact">
            Contacto
          </Nav.Link>

          <Nav.Link as={Link} to="/legal">
            Legal
          </Nav.Link>

        </Nav>

        <Nav className="nav-user">

          {!auth.isLogged && (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>

              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </>
          )}

          {auth.isLogged && (
            <>
              <Navbar.Text className="username">
                Bienvenido, <strong>{username}</strong>
              </Navbar.Text>

              <Logout />
            </>
          )}

        </Nav>

      </Container>

    </Navbar>

  )
}

export default Header