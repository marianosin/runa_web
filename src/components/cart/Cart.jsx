import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'

export default function Cart() {
     const {cart, removeFromCart, clearCart, buyAllProducts} = useContext(CartContext)
     function handleClearing(){
          clearCart()
      }
      function handleRemove(id){
          removeFromCart(id)
      }
     console.log(cart)
  return (
    <div>
      <h3>Carrito de la compra</h3>
        {(cart.legth !== 0 ) ? cart.map(item => <div key={item.id} style={{border: "red solid 1px"}} >
          <p>{item.name}</p>
          <p>{item.quantity} </p>
          <p>{item.total} </p>
          <button onClick={()=>{handleRemove(item.id)}} >X</button>
         </div>) : <div>No hay productos en el carrito</div>}
         <button onClick={handleClearing}>Borrar todo</button>
         <button onClick={buyAllProducts}>Comprar</button>
    </div>
  )
}
