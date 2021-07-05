import React, { useState } from 'react'
import { Form, Button, Table} from "react-bootstrap";

const AddProduct = props => {
	const initialFormState = { id: null, name: '', description: '', price: '', quantity: '' }
	const [ product, setProduct ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		<Form className="Form-product"
			onSubmit={event => {
				event.preventDefault()
				if (!product.name || !product.description || !product.price || !product.quantity) return

				props.addProduct(product)
				setProduct(initialFormState)
			}}>

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
            <Button className="mb-3" variant="primary" type="submit">Add to Products</Button>
		</Form>


		
	)
}
  
  export default AddProduct