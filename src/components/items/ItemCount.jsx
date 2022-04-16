import { useState } from 'react'
import {Button} from 'react-bootstrap'




export default function ItemCount({stock, onAdd}){

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
    const handleClick = () => {onAdd(count)}
    return (
 
         <div style={{marginTop: "30px"}}>
             <Button onClick={substract} variant="danger">-</Button>
            <p>{count} </p>
             <Button onClick={add} variant="success">+</Button>
             <Button onClick={handleClick} variant="primary">Agregar a carrito</Button>
         </div>
 
 
    )
 }
 
 