import { Container } from "react-bootstrap"

const Footer = () => {

  return (

    <footer
      style={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
      }}
    >

      <Container>

        <p>© 2026 CineScope</p>

        <p>
          Proyecto DSM · React + TypeScript · Firebase
        </p>

      </Container>

    </footer>

  )
}

export default Footer