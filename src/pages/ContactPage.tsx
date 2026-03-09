import { Container, Row, Col, Card } from "react-bootstrap"

const ContactPage = () => {

  return (

    <Container style={{ marginTop: "30px", maxWidth: "800px" }}>

      <h1 className="mb-4">Contacto</h1>

      <Card>
        <Card.Body>

          <Row>

            <Col>

              <h5>📧 Email</h5>
              <p>contacto@cinescope.com</p>

              <h5>📍 Ubicación</h5>
              <p>Pamplona, España</p>

              <h5>💬 Soporte</h5>
              <p>
                Si tienes dudas sobre la aplicación o encuentras algún
                problema, puedes escribirnos y te responderemos lo antes posible.
              </p>

            </Col>

          </Row>

        </Card.Body>
      </Card>

    </Container>

  )
}

export default ContactPage