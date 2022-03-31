import { Form, FormControl, Container, Button} from 'react-bootstrap'




export default function ItemCount({product, productController}){

    
    
    return (
 
         <div>
             <h3>{product.name} </h3>
             <p>Precio: ARS {product.price} </p>
             <Container>
                <Form className="d-flex">
                    <Button variant="outline-success" onClick={()=>{(product.q< product.stock ) ? productController(product.q= product.q-1): productController(product.q= product.q+0) }}>-</Button>
                    <FormControl
                    type="number"
                    value={product.q}
                    className="me-2"
                    aria-label="counter"
                    />
                    <Button variant="outline-success" onClick={()=>{(product.q< product.stock ) ? productController(product.q= product.q+1): productController(product.q= product.q+0) }}>+</Button>
                </Form>
            </Container>
         </div>
 
 
    )
 }
 
 