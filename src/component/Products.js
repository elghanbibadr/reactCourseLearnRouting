import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <h1>Products Page</h1>
    <ul>
        <li>
            <Link to="products/carpet">Carpet</Link>
        </li>
        
        <li>
            <Link to="products/book">book</Link>
        </li>
        
        <li>
            <Link to="products/piano">piano</Link>
        </li>
        
    </ul>
    </>
  )
}

export default Products