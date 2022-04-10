import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
  return (
    <div style={{display: "flex"}}>
        <img src={item.image} alt="Foto del producto" style={{width: "20%"}} />
        <p style={{width: "100%"}}>Descripción: {item.description} </p>
        <p>Stock:{item.stock} </p>
        <p>Precio: $ {item.price} ARS </p>
        <ItemCount stock={item.stock} />
    </div>
  )
}
