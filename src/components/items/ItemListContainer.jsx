//This component is indended to be a grid ofproducts

import { useEffect, useState } from 'react'
import { CardGroup} from 'react-bootstrap'
import CardNewProducts from '../backups/CardNewProducts'
import proms from '../utils/proms';
import products from '../utils/products'
import ItemCount from './ItemCount'
import ItemList from '../items/ItemList';
export default function ItemListContainer(){

     const [items, setItems] = useState([]);

     useEffect(()=>{
         proms(2000, products)
         .then(result => setItems(result))
         .catch(error =>console.log(error))
     }, [items])

   
    return (

        <div>
            <ItemList products={items}/>
        </div>


   )
}

