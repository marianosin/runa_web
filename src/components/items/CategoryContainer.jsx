import { query, collection, getFirestore, where, getDocs } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Item from './Item'

export default function CategoryContainer() {
  const {category} = useParams()
  const [categoryList, setCategoryList] = useState([])

  useEffect(()=>{
    const db = getFirestore()

    const products = query(collection(db, 'products'), where('category', '==', category))
    getDocs(products).then((product) => {
        
        setCategoryList(product.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        
    }
    )
 }, [category])

  return (
    <div style={{display: "flex"}}>
        {categoryList.map((p) =>(
          <Item
          key= {p.id}
          category={p.category}
          id = {p.id}
          name= {p.name}
          image = {p.image}
          description= {p.description}
          price= {p.price}
          stock={p.stock}  />))}
    </div>
  )
}
