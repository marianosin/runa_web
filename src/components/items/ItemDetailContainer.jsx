import React, { useState, useEffect } from 'react'
import loadsDetails from '../utils/loadsDetails'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
export default function ItemDetailContainer() {
    const {id} = useParams()
    
    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const products = doc(db, 'products', id)
        getDoc(products).then((product) => {
            setItem({id: product.id, ...product.data()})
        })
    }, [])
  return (
    <ItemDetail item={item} />
  )
}
