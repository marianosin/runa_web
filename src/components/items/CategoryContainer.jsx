import React from 'react'
import { useParams } from 'react-router-dom'

import products from '../utils/products'
import CategoryList from './CategoryList'
import Item from './Item'

export default function CategoryContainer() {
  const {category} = useParams()
  const categoryProducts = products.filter(p => p.category === category)
  return (
    <div style={{display: "flex"}}>
        {categoryProducts.map((p) =>(
          <Item
          key= {p.id}
          category={p.category}
          id = {p.id}
          name= {p.name}
          image = {p.image}
          description= {p.description}
          price= {p.price}
          stock={p.stock}  />))}
    </div>
  )
}
