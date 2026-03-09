import { Container, Card } from "react-bootstrap"

const LegalPage = () => {

  return (

    <Container style={{ marginTop: "30px", maxWidth: "900px" }}>

      <h1 className="mb-4">Aviso legal</h1>

      <Card>
        <Card.Body>

          <p>
            Este sitio web forma parte de un proyecto académico desarrollado
            para la asignatura <strong>Despliegue de Servicios Multimedia</strong>.
          </p>

          <p>
            La aplicación permite explorar un catálogo de películas,
            valorarlas, comentar sobre ellas y guardarlas como favoritas.
          </p>

          <p>
            Todas las imágenes utilizadas pertenecen a sus respectivos
            propietarios y se emplean únicamente con fines educativos.
          </p>

          <p>
            Este proyecto ha sido desarrollado utilizando las siguientes
            tecnologías:
          </p>

          <ul>
            <li>React + TypeScript</li>
            <li>React Bootstrap</li>
            <li>Firebase Realtime Database</li>
            <li>Firebase Authentication</li>
          </ul>

          <p>
            El código fuente está disponible en el repositorio de GitHub
            proporcionado para la evaluación de la asignatura.
          </p>

        </Card.Body>
      </Card>

    </Container>

  )
}

export default LegalPage