import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'
export default function ItemList({products}) {
    
  return (
    products.map(p =>(
      //Item contains a card that recives these parameters
        <div>
          <Link to={`/dynamicelement/${p.id}`}>
            <Item
                key= {p.id}
                name= {p.name}
                price= {p.price}
                stock={p.stock}  />
          </Link>
        </div>

    ))
    
  )
}
