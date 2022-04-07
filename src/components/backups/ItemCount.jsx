import { useState } from 'react'
import { Form, FormControl, Container, Button} from 'react-bootstrap'




export default function ItemCount({products, onAdd}){

    const [purchase,setPurchase] = useState(1)
    
    
    return (
 
         <div>
             <h3>{products.name} </h3>
             <p>Precio: ARS {products.price} </p>
             <p>En stock: {products.stock} </p>
             <Container>
                <Form className="d-flex">
                    <Button variant="outline-success" onClick={()=>{(purchase> 0 ) ? setPurchase(purchase-1): setPurchase(purchase+0); }}>-</Button>
                    <FormControl
                    type="number"
                    value={purchase}
                    className="me-2"
                    aria-label="counter"
                    />
                    <Button variant="outline-success" onClick={()=>{(purchase< products.stock ) ? setPurchase(purchase+1): setPurchase(purchase+0) }}>+</Button>
                    <div><Button variant="outline-success" onClick={(purchase)=>{onAdd(purchase)}} >Agregar al carrito</Button></div>
                </Form>
            </Container>
         </div>
 
 
    )
 }
 
 