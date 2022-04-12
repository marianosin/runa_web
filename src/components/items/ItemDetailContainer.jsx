import React, { useState, useEffect } from 'react'
import loadsDetails from '../utils/loadsDetails'
import ItemDetail from './ItemDetail'
import {detailTestProduct} from '../utils/products'//Takes test product
import products from '../utils/products'
import { useParams } from 'react-router-dom'
export default function ItemDetailContainer() {
    const {id} = useParams()
    const product = products.find(p => p.id === parseInt(id))
    //This creates a state
    const [item, setItem] = useState({})

    useEffect(() => {
        //Runs in third place setting state as detailTestProduct
      loadsDetails(2000, product )
      .then(res=>{
          setItem(res) //Here we should call setItem
      })
      .catch(error=> console.log(error))
      
    }, [product])
    console.log(item)//Runs first before setting state

  return (
    <ItemDetail item={item} />
  )
}
