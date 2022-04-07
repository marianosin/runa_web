import { useState } from 'react'
import { Form, FormControl, Container, Button} from 'react-bootstrap'




export default function ItemCount({stock}){

    const [count,setCount] = useState(1)
    
    function add(){
        if (count<stock) {
            setCount(count + 1);
        }
        
    }
    function substract() {
        if (count > 0) {
            setCount(count -1);
        }
        
    }
    function onAdd(count) {
        alert('You are buying ' + count +' items of this product.')
    }
    return (
 
         <div style={{marginTop: "30px"}}>
             <Button onClick={substract} variant="danger">-</Button>
            <p>{count} </p>
             <Button onClick={add} variant="success">+</Button>
             <Button onClick={onAdd} variant="primary">Agregar a carrito</Button>
         </div>
 
 
    )
 }
 
 