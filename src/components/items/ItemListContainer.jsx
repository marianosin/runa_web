//This component is indended to be a grid ofproducts

import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import products from '../utils/products'
import ItemCount from './ItemCount'
import ItemList from '../items/ItemList';
import isLoaded from '../utils/isLoaded';
export default function ItemListContainer(){
    const [loading, setLoading] = useState(true)


     const [items, setItems] = useState([]);

     

    //A Promise executes something when a server sends data (easy explication)
    //Use effect renders when object is changed but just the object in business 
    useEffect(()=>{
        const db = getFirestore()

        const products = query(collection(db, 'products'))
        getDocs(products).then((product) => {
            
            setItems(product.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            setLoading(false)
        }
        )
     }, [items])


    
    return (
        //This is just the container
        
        <div className='mainContainer'>
            {loading ? <div>Cargando...</div> : null}
            <ItemList products={items}  />
        </div>


   )
}

