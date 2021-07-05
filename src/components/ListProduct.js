import React from 'react'
import { Form, Button, Table} from "react-bootstrap";

const ListProduct = props => (
    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>Index</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.products.length > 0 ? (
          props.products.map(product => (
            <tr key={product.id}>
                <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button variant="primary"
                  onClick={() => {
                    props.editRow(product)
                  }}
                  
                >
                  Edit
                </Button>
                <Button variant="danger"
                  onClick={() => props.deleteProduct(product.id)}
                  
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No Product</td>
          </tr>
        )}
      </tbody>
    </Table>
)
  
export default ListProduct