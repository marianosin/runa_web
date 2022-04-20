import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../cart/CartContext'



export default function ItemDetail({item}) {

  //Import context to be used by button*/
  const {addToCart} = useContext(CartContext);

  const [toCart,setToCart] = useState(false)
  //Father function to pass to the child function
  const onAdd = (count) => {
    setToCart(count)
    
  }
  
  return (
    <div style={{display: "flex"}}>
        <img src={item.image} alt="Foto del producto" style={{width: "20%"}} />
        <p style={{width: "100%"}}>Descripción: {item.descriptionExtended} </p>
        <p>Stock:{item.stock} </p>
        <p>Precio: $ {item.price} ARS </p>
        {(toCart === false) ? <ItemCount stock={item.stock} onAdd={onAdd}/> : <Button href='/cart' onClick={addToCart(item)} variant="primary">Confirmar compra</Button>}
        
    </div>
  )
}
