import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
  //Father function to pass to the child function
  const onAdd = (count) => {
    console.log(count)
  }

  return (
    <div style={{display: "flex"}}>
        <img src={item.image} alt="Foto del producto" style={{width: "20%"}} />
        <p style={{width: "100%"}}>Descripción: {item.description} </p>
        <p>Stock:{item.stock} </p>
        <p>Precio: $ {item.price} ARS </p>
        <ItemCount key={item.id} stock={item.stock} onAdd={onAdd} />
    </div>
  )
}
