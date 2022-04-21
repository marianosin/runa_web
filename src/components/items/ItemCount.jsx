import { useContext, useState } from 'react'
import {Button} from 'react-bootstrap'
import { CartContext } from '../cart/CartContext'



export default function ItemCount({id,name, stock, price, image }){
    const {addToCart, cart, setCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)
    function add(){
        if(quantity < stock){
            setQuantity(quantity + 1)
          }
        }
      function substract(){
          if(quantity > 1){
              setQuantity(quantity - 1)
          }
      }
      function handleClick(){
            addToCart({id, name, quantity, price, image, cart, setCart})
            setAdded(true)

      }
    return (
 
         <div style={{marginTop: "30px"}}>
             {
                    added ? <h3>{name} fue añadido</h3>:<div> <Button onClick={substract} variant="danger">-</Button><p>{quantity} </p><Button onClick={add} variant="success">+</Button></div>
             }
             
             {(added !== true)?<Button onClick={()=>handleClick({id, name, quantity, price, image})} variant="primary">Agregar a carrito</Button>:<Button href={'/cart'} variant="primary">Ir al carrito</Button>}
         </div>
 
 
    )
 }
 
 