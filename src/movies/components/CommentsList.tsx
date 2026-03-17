/* import type { Comment } from "../../domain/Comment"

interface Props {
  comments: Comment[]
}

const CommentsList = ({ comments }: Props) => {

  return (

    <div style={{ marginTop: "20px" }}>

      <h4>Comentarios</h4>

      {comments.length === 0 && <p>No hay comentarios todavía</p>}

      {comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((c, index) => (

        <div key={index} style={{ marginBottom: "10px" }}>

          <strong>{c.email}</strong>

          <span style={{ marginLeft: "10px", color: "gray", fontSize: "0.9rem" }}>
            {new Date(c.date).toLocaleString()}
          </span>

          <div>{c.text}</div>

        </div>

      ))}

    </div>
  )
}

export default CommentsList */

import type { Comment } from "../../domain/Comment"
import "./commentsList.css"

interface Props {
  comments: Comment[]
}

const CommentsList = ({ comments }: Props) => {

  return (

    <div className="comments-container">

      <h4 className="comments-title">Comentarios</h4>

      {comments.length === 0 && (
        <p className="no-comments">No hay comentarios todavía</p>
      )}

      {comments
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((c, index) => (

          <div key={index} className="comment-card">

            <div className="comment-header">

              <span className="comment-email">{c.email}</span>

              <span className="comment-date">
                {new Date(c.date).toLocaleString()}
              </span>

            </div>

            <div className="comment-text">
              {c.text}
            </div>

          </div>

        ))}
    </div>
  )
}

export default CommentsList