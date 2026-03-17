import { useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "./AuthContext"

import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import { useNavigate } from "react-router"

import "./login.css"

const API_KEY = "AIzaSyBvbA1ikAY0fis4xW25zudtm-os6ish-Zs"

const Login = () => {

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        authData
      )
      .then((response) => {
        alert("Login correcto")

        authContext.login(
          response.data.idToken,
          response.data.localId,
          response.data.email
        )

        setTimeout(() => {
          navigate("/")
        }, 500)
      })
      .catch(() => {
        alert("Login incorrecto")
      })
  }

  return (
    <Container className="login-container">

      <Row className="justify-content-center">

        <Col md={5} lg={4}>

          <Card className="login-card">

            <Card.Body>

              <h3 className="login-title">Iniciar sesión</h3>

              <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3">

                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                  />

                </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                  />

                </Form.Group>

                <Button type="submit" className="login-button">
                  Login
                </Button>

              </Form>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  )
}

export default Login