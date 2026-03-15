import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

interface Props {
  onRate: (value: number) => void
  initialRating?: number
}

const RatingStars = ({ onRate, initialRating = 0 }: Props) => {

  const [rating, setRating] = useState<number>(0)

  useEffect(() => {
    setRating(initialRating)
  }, [initialRating])

  const handleClick = (value: number) => {
    setRating(value)
    onRate(value)
  }

  return (

    <div style={{ marginTop: "10px" }}>

      {[1,2,3,4,5].map((star) => (

        <Button
          key={star}
          variant={star <= rating ? "warning" : "outline-warning"}
          style={{ marginRight: "5px" }}
          onClick={() => handleClick(star)}
        >
          ⭐
        </Button>

      ))}

    </div>

  )
}

export default RatingStars