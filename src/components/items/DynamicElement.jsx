import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../utils/products'
import ItemDetailContainer from './ItemDetailContainer'
export default function DynamicElement() {
    const {id} = useParams()
    console.log(typeof parseInt(id))
    let product = products.find(item=> item.id === parseInt(id))
    console.log(product)
  return (
    <div>
        <ItemDetailContainer product={product}/>
    </div>
  )
}
