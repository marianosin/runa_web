//This component is indended to be a grid ofproducts

import { useState } from 'react'
import { CardGroup} from 'react-bootstrap'
import CardNewProducts from '../backups/CardNewProducts'
import ItemCount from './ItemCount'
export default function ItemListContainer(){

    
    let products = {"name":"collar", "stock":10, "price":2300}
    
    function onAdd(purchase){

        alert(purchase);
        
    }
   
    return (

        <div>
            <ItemCount stock={10} />
        </div>


   )
}

