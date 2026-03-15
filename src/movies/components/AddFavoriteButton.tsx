import { Button } from "react-bootstrap"

interface Props {
  onToggle: () => void
  isFavorite: boolean
}

const AddFavoriteButton = ({ onToggle, isFavorite }: Props) => {

  return (

    <Button
      variant={isFavorite ? "secondary" : "danger"}
      style={{ marginTop: "15px" }}
      onClick={onToggle}
    >
      {isFavorite ? "💔 Quitar de favoritos" : "❤️ Añadir a favoritos"}
    </Button>

  )
}

export default AddFavoriteButton