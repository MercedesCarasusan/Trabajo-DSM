import { useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "./AuthContext"

import { Form, Button, Container, Row, Col } from "react-bootstrap"

const API_KEY = "AIzaSyBvbA1ikAY0fis4xW25zudtm-os6ish-Zs"

const Register = () => {

  const authContext = useContext(AuthContext)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const authData = {
      email,
      password,
      returnSecureToken: true,
    }

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        authData
      )
      .then((response) => {
        console.log(response.data)
        alert("Usuario registrado correctamente")
        authContext.login(
          response.data.idToken,
          response.data.localId,
          response.data.email
        )

      })
      .catch((error) => {
        console.log(error.response?.data)
        alert("Error al registrar usuario")
      })
  }

  return (
    <Form onSubmit={submitHandler}>
      <Container>
        <Row>

          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>

          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>

          <Col>
            <Button type="submit">Register</Button>
          </Col>

        </Row>
      </Container>
    </Form>
  )
}

export default Register