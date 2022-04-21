import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
const item= {name:'test', price:4, quantity:1, total:3}
export default function Cart() {
     const {cart} = useContext(CartContext)
     console.log(cart)
  return (
    <div>
      <h3>Titulo</h3>
        {(cart.legth !== 0 ) ? cart.map(item => <div key={item.id}>{item.name}</div>) : <div>No hay productos en el carrito</div>}
    </div>
  )
}
