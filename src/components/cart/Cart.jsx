import React, {useEffect, useState} from 'react'
import { CartContext } from './CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Form, FormControl} from 'react-bootstrap'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
export default function Cart() {
     const {cart, removeFromCart, clearCart} = useContext(CartContext)
     const [productID, setProductID] = useState('')
     const [name, setNamw] = useState('')
     const [email, setEmail] = useState('')
     
     const [nextStep, setNextStep] = useState(false)
     const [allSet, setAllSet] = useState(false)
     let [total, setTotal] = useState(0)
     
      useEffect(() => {
        let auxTotal = 0
        cart.map((p) => {auxTotal = auxTotal + p.price * p.quantity})
        setTotal(auxTotal)
      }, [cart])

      function handleName(e){
        setNamw(e.target.value)
      }
      function handleEmail(e){
        setEmail(e.target.value)
      }
      function handleConfirm (e){
        e.preventDefault()
        let auxPurchise = {name: name, email: email, products: cart}
        
        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, auxPurchise).then(({id}) => {alert("Su compra fue enviada correctamente. Será contactado para coordinar entrega.")
         setAllSet(true)
         
         setProductID(id)
        })
        
      }

     function handleClearing(){
          clearCart()
      }
      function handleRemove(id){
          removeFromCart(id)
      }
      function handleBuy(){
        setNextStep(true)
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

         {(!allSet) ?(!nextStep) ? <button onClick={handleBuy}>Continuar compra</button>: <Form><FormControl type='text'placeholder='Nombre y apellido' className='me-2' aria-label='name' onChange={handleName}></FormControl><FormControl type='email'placeholder='email' className='me-2' aria-label='email' onChange={handleEmail}></FormControl> <button onClick={handleConfirm} className="btn btn-primary" >Comprar</button> </Form>: <div ><h2>Gracias por su compra! Su ID de comra es: {productID} </h2> </div>}
    </div>
  )
} }
