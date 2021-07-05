import React, { useState, useEffect } from 'react'
import { Form, Button, Table} from "react-bootstrap";


const EditProduct = props => {
  const [ product, setProduct ] = useState(props.currentProduct)

  useEffect(
    () => {
      setProduct(props.currentProduct)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <Form  className="Form-product"
      onSubmit={event => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
            <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Name</Form.Label> 
                <Form.Control type="text" placeholder="Enter Product Name" name="name" value={product.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Description</Form.Label> 
                <Form.Control as="textarea" placeholder="Leave a descripption here" name="description" value={product.description} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Price</Form.Label> 
                <Form.Control type="number" placeholder="Enter Price in rupiah" name="price" value={product.price} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Quantity</Form.Label> 
                <Form.Control type="number" placeholder="Enter Price in rupiah" name="quantity" value={product.quantity} onChange={handleInputChange} />
            </Form.Group>
    <Button variant="primary" type="submit">Update Product</Button>
      <Button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </Button>
    </Form>
  )
}

export default EditProduct