import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
  
  
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt="Foto de producto" />
      <p>{item.description}</p>
      <ItemCount id={item.id} name={item.name} stock={item.stock}  price={item.price} image={item.image}  />
    </div>
  )
}
