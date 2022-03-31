//This component is indended to be a grid ofproducts

import { useState } from 'react'
import { CardGroup} from 'react-bootstrap'
import CardNewProducts from './CardNewProducts'
import ItemCount from './ItemCount'
export default function ItemListContainer({greetings}){

    //let product = {"name":"collar", "stock":100, "price":2300}
    
    let [product, productController] = useState({"name":"collar", "stock":10, "price":2300, "q":0})
    console.log(product)
   return (

        <div>
            <ItemCount product={product} productController={productController} />
        </div>


   )
}

