import React, {useEffect, useState} from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
export default function Cart() {
     const {cart, removeFromCart, clearCart, buyAllProducts} = useContext(CartContext)
     let [total, setTotal] = useState(0)
     
      useEffect(() => {
        let auxTotal = 0
        cart.map(p => {auxTotal = auxTotal + p.price * p.quantity})
        setTotal(auxTotal)
      }, [cart])

     function handleClearing(){
          clearCart()
      }
      function handleRemove(id){
          removeFromCart(id)
      }

     if (cart.length === 0) {
       return (
          <div>
            <h1>Carrito vacio</h1>
            <Link to={`/`} className="btn btn-secondary" >Ir al inicio</Link>
          </div>
       ) } else{ 
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
         <div>Total a pagar: {total} </div>
         <button onClick={buyAllProducts}>Comprar</button>
    </div>
  )
} }
