import React, { useState, useEffect } from 'react'
import loadsDetails from '../utils/loadsDetails'
import ItemDetail from './ItemDetail'
import {detailTestProduct} from '../utils/products'//Takes test product
export default function ItemDetailContainer() {

    //This creates a state
    const [item, setItem] = useState({})

    useEffect(() => {
        //Runs in third place setting state as detailTestProduct
      loadsDetails(2000, detailTestProduct)
      .then(res=>{
          setItem(res) //Here we should call setItem
      })
      .catch(error=> console.log(error))
      
    }, [])
    console.log(item)//Runs first before setting state

  return (
    <ItemDetail item={item} />
  )
}
