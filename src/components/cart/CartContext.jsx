import React, {createContext, useState} from "react";

/* Create cartContext */
const CartContext = createContext();

/* Create CartProvider */
/* This means we are creating a global state for the cart */	
const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    /* Functions of this global variable */	
    /* Add to cart function */
    const addToCart = ({id, name, quantity, price}) => {
        const item = cart.find(item => item.id === id);
        if(item){
            console.log("item en carrito");
        }else{
            cart.push({id, name, quantity, price} )
            console.log("item añadido al carrito")
        }
        console.log(cart);
    }
    /* Remove from cart function */
    const removeFromCart = (name) => console.log(name);
    /* Buy all products function */
    const buyAllProducts = () => console.log("Compra realizada");
    /* Clear all products function */
    const clearCart = () => console.log("Borra contenido");
    //Everything inside children has access to cartContext functionalities
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAllProducts, clearCart}} >
            {children}
        </CartContext.Provider>
    );
     }

export default CartProvider;
export {CartContext};

/* To use this, is similar to the react router format.
 We just have to englobe the app in the provider */