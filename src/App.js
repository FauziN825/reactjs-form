
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, Fragment } from 'react'

import ListProduct from './components/ListProduct'

import AddProduct from './components/AddProduct';

import EditProduct from './components/EditProduct';

function App() {


	const dataProduct = [
		{ id: 1, name: 'Laptop Lenovo', description: 'this is new laptop in 2021 from lenovo', price: 5000000, quantity: 45 },
    { id: 2, name: 'Laptop HP Pavilion', description: 'this is new laptop in 2021 from HP', price: 6000000, quantity: 12 },
    { id: 3, name: 'Laptop Accer', description: 'this is new laptop in 2021 from Accer', price: 7000000, quantity: 32 },
	]

	const initialFormState = { id: null, name: '', description: '', price: '', quantity: '' }


	const [ products, setProducts ] = useState(dataProduct)
	const [ currentProduct, setCurrentProduct ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


	const addProduct = product => {
		product.id = products.length + 1
		setProducts([ ...products, product ])
	}

	const deleteProduct = id => {
		setEditing(false)

		setProducts(products.filter(product => product.id !== id))
	}

	const updateProduct = (id, updateProduct) => {
		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updateProduct : product)))
	}

	const editRow = product => {
		setEditing(true)

		setCurrentProduct({ id: product.id, name: product.name, description: product.description, price: product.price, quantity: product.quantity })
	}

	return (
		<div className="App">
      <header className="App-header">
			<h1>Form Product</h1>
              {editing ? (
                <Fragment>
                  <h2>Edit Product</h2>
                  <EditProduct
                    editing={editing}
                    setEditing={setEditing}
                    currentProduct={currentProduct}
                    updateProduct={updateProduct}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <h2>Add Product</h2>
                  <AddProduct addProduct={addProduct} />
                </Fragment>
              )}

              <h2>List Product</h2>
              <ListProduct products={products} editRow={editRow} deleteProduct={deleteProduct} />

      </header>
		</div>
	)
}

export default App;
