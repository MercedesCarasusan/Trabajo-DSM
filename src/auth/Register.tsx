import { useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router"

import { Form, Button, Container, Row, Col } from "react-bootstrap"

const API_KEY = "AIzaSyBvbA1ikAY0fis4xW25zudtm-os6ish-Zs"

const Register = () => {

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

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
        setTimeout(() => {
          navigate("/")
        }, 500)

      })
      .catch((error) => {
        console.log(error.response?.data)

        const firebaseError = error.response?.data?.error?.message

        let message = "Error al registrar usuario"

        switch (firebaseError) {
          case "EMAIL_EXISTS":
            message = "El email ya está registrado"
            break
          case "INVALID_EMAIL":
            message = "El email no es válido"
            break
          case "WEAK_PASSWORD : Password should be at least 6 characters":
            message = "La contraseña debe tener al menos 6 caracteres"
            break
          default:
            if (firebaseError) {
              message = firebaseError
            }
        }

        alert(message)
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