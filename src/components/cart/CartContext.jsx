import React, {createContext, useState, useEffect} from "react";

/* Create cartContext */
const CartContext = createContext();

/* Create CartProvider */
/* This means we are creating a global state for the cart */	
const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    /* Functions of this global variable */	
    /* Add to cart function */
    const addToCart = ({id, name, quantity, price, cart}) => {
        let item = {id, name, quantity, price, total: quantity * price};
        let item2 = cart.find(item => item.id === id);
        if(item2){
            item2.quantity += 1;
            item2.total = item2.quantity * item2.price;
            setCart([...cart]);
        }else{
            setCart([...cart, item]);
        }
        
        
             
        
        
    }
    useEffect(() => {
      
        console.log(cart)
      
    }, [cart])
    
    /* Remove from cart function */
    const removeFromCart = (id) =>{
        let newCart = cart.filter(item => item.id !== id);
        setCart([...newCart]);
    };
    /* Buy all products function */
    const buyAllProducts = () => alert("Se realizó la compra");
    /* Clear all products function */
    const clearCart = () => setCart([]);
    //Everything inside children has access to cartContext functionalities
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAllProducts, clearCart, setCart}} >
            {children}
        </CartContext.Provider>
    );
     }

export default CartProvider;
export {CartContext};

/* To use this, is similar to the react router format.
 We just have to englobe the app in the provider */