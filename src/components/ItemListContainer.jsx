//This component is indended to be a grid ofproducts

import { CardGroup} from 'react-bootstrap'
import CardNewProducts from './CardNewProducts'

export default function ItemListContainer({greetings}){

    let productList = ["Collar", "Pulsera", "Prendedor"]
    function delProd() {
        alert("Holas")
    }
    
   return (

    <div className='Novedades'>

        <h2>Novedades</h2>
        <CardGroup>
            {productList.map((value)=>{
                return (
                    <CardNewProducts products={value} delProd={delProd} />
                )
            })}
        </CardGroup>
    </div>


   )
}

