import { useContext } from "react"
import { Nav } from "react-bootstrap"
import { AuthContext } from "./AuthContext"

const Logout = () => {

  const auth = useContext(AuthContext)

  const logoutHandler = () => {
    auth.logout()
  }

  return (
    <Nav.Link onClick={logoutHandler}>
      Logout
    </Nav.Link>
  )
}

export default Logout