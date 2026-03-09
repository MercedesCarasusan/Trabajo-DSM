import { Form } from "react-bootstrap"

interface Props {
  categories: string[]
  selectedCategory: string
  onChange: (category: string) => void
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onChange,
}: Props) => {

  return (

    <Form.Group style={{ marginBottom: "1rem" }}>

      <Form.Label>Filtrar por categoría</Form.Label>

      <Form.Select
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >

        <option value="">Todas</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}

      </Form.Select>

    </Form.Group>
  )
}

export default CategoryFilter