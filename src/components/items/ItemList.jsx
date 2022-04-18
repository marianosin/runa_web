import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'
export default function ItemList({products}) {
    
  return (
    products.map(p =>(
      //Item contains a card that recives these parameters
        
          
            <Item
                key= {p.id}
                category={p.category}
                id = {p.id}
                name= {p.name}
                image = {p.image}
                description= {p.description}
                price= {p.price}
                stock={p.stock}  />
          
        

    ))
    
  )
}
