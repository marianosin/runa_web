//This component is indended to be a grid ofproducts

import { useEffect, useState } from 'react'

import products from '../utils/products'
import ItemCount from './ItemCount'
import ItemList from '../items/ItemList';
import isLoaded from '../utils/isLoaded';
export default function ItemListContainer(){

     const [items, setItems] = useState([]);
    //A Promise executes something when a server sends data (easy explication)
    //Use effect renders when object is changed but just the object in business 
    useEffect(()=>{
         isLoaded(2000, products)
         .then(result => setItems(result))
         .catch(error =>console.log(error))
     }, [items])

   
    return (

        <div className='mainContainer'>
            <ItemList products={items}  />
        </div>


   )
}

