import { useState } from "react"
import { Form, Button } from "react-bootstrap"

interface Props {
  onAddComment: (text: string) => void
}

const CommentForm = ({ onAddComment }: Props) => {

  const [text, setText] = useState<string>("")

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if(!text.trim()) return

    onAddComment(text)

    setText("")
  }

  return (

    <Form onSubmit={submitHandler}>

      <Form.Group>

        <Form.Control
          type="text"
          placeholder="Escribe un comentario"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

      </Form.Group>

      <Button type="submit" style={{ marginTop: "10px" }}>
        Comentar
      </Button>

    </Form>
  )
}

export default CommentForm