import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import products from '../utils/products'
export default function SearchContainer() {

    const { search } = useParams()
    const searchProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) || []
    return (
        <div style={{display: "flex"}}>
    {((searchProducts===[]) ? `No se encontró ningún producto con este nombre: ${search}` : searchProducts.map((p) =>(
        <Item
                key= {p.id}
                category={p.category}
                id = {p.id}
                name= {p.name}
                image = {p.image}
                description= {p.description}
                price= {p.price}
                stock={p.stock}  />)))}
        </div>
  )
}
