/* This component is used to display items that are part of a spececific category */
import { query, collection, getFirestore, where, getDocs } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import Item from './Item'

export default function CategoryContainer() {
  const {category} = useParams()
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setLoading(true)
    }, [category])

  useEffect(()=>{
    const db = getFirestore()

    const products = query(collection(db, 'products'), where('category', '==', category))
    getDocs(products).then((product) => {
        
        setCategoryList(product.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        setLoading(false)
    }
    )
 }, [category])
 if (loading) {
    return <div style={{marginTop: '3%', zIndex: 2}}><CircularProgress /></div>
  } else {
  return (

    <div className='mainContainer'>
      
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
}
