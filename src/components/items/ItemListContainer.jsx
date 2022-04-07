//This component is indended to be a grid ofproducts

import { useState } from 'react'
import { CardGroup} from 'react-bootstrap'
import CardNewProducts from '../backups/CardNewProducts'
import ItemCount from './ItemCount'
export default function ItemListContainer(){

    

   
    return (

        <div>
            <ItemCount stock={10} />
        </div>


   )
}

