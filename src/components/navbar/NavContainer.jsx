import React from 'react'
import products from '../utils/products'
import NavbarComp from './NavbarComp'
import { useEffect, useState } from 'react'
import isLoaded from '../utils/isLoaded'
export default function NavContainer() {
    const [cat, setCat] = useState([])
    useEffect(() => {
      isLoaded(2000, products)
      .then(result => setCat(result))
      .catch(error =>console.log(error))
    
      
    }, [cat])
    
  return (
        <NavbarComp cat={cat} /> 
  )
}
