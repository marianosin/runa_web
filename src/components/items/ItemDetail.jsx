import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function ItemDetail({item}) {

  const [toCart,setToCart] = useState(0)
  //Father function to pass to the child function
  const onAdd = (count) => {
    setToCart(count)
    
  }
  console.log(toCart)
  return (
    <div style={{display: "flex"}}>
        <img src={item.image} alt="Foto del producto" style={{width: "20%"}} />
        <p style={{width: "100%"}}>Descripción: {item.descriptionExtended} </p>
        <p>Stock:{item.stock} </p>
        <p>Precio: $ {item.price} ARS </p>
        {(toCart === 0) ? <ItemCount stock={item.stock} onAdd={onAdd}/> : <Button href='/cart' variant="primary">Ir al carrito</Button>}
        
    </div>
  )
}
