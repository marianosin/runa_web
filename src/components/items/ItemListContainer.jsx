/* Landing page for the item list */
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import ItemList from '../items/ItemList';
import CircularProgress from '@mui/material/CircularProgress';


export default function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);


     

    //A Promise executes something when a server sends data (easy explication)
    //Use effect renders when object is changed but just the object in business 
    useEffect(()=>{
        let isMounted = true;
        const db = getFirestore()

        const products = query(collection(db, 'products'))
        getDocs(products).then((product) => {
            if (isMounted){
                setItems(product.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
                setLoading(false)
            }
        })
        return () => {
            isMounted = false
        }
     }, [items])
    return (
        //This is just the container of the item list
        <div className='mainContainer'>
            {loading ? <div style={{marginTop: '3%'}}><CircularProgress /></div> : null}
            <ItemList key='itemList' products={items}  />
        </div>


   )
}

