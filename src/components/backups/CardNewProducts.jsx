//This component is indended to be a grid ofproducts
import { useState } from 'react'
import {Card} from 'react-bootstrap'

export default function CardNewProducts({products, delProd}){

    //This is a hook and helps things to be easier
    
   return (

    

        
            <Card>
                
                <Card.Body>
                <Card.Title>{products} </Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto mollitia, error ut in nulla hic fuga nesciunt? In quod eaque consequuntur, incidunt obcaecati iure maiores?
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Card.Text>
                    Precio: ARS 20000
                </Card.Text>
                <button onClick={delProd}>Comprar</button>
                </Card.Footer>
            </Card>

            
        
        
        
    


   )
}

