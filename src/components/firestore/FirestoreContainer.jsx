import React from 'react'
import { useEffect, useState } from 'react'
import {doc, collection, getDoc, getFirestore, query, where} from 'firebase/firestore'
export default function FirestoreContainer() {
    const [itemList, setItemList] = useState({})
    useEffect(() => {
      const db = getFirestore()

      const products = doc(db, 'products', 'O1YssnDmm9Sl3BSgqhgv')
      getDoc(products).then((product) => {
          
          setItemList({id: product.id, ...product.data()})
      }
      )
      }, [])

    
  return (
    <div>
        <h1>h</h1>
        {itemList.name}

    </div>
  )
}
