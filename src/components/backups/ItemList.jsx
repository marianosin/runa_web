import React from 'react'
import Item from '../items/Item'

//Maps content


function ItemList({products}) {
  return (
    products.map((p) =>(
        <Item
            key={p.id}
            name= {p.name}
            price= {p.price}/>
  ))
  )
  
}

export default ItemList