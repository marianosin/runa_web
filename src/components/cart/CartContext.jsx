import React, {createContext, useState} from "react";

/* Create cartContext */
const CartContext = createContext();

/* Create CartProvider */
/* This means we are creating a global state for the cart */	
const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    /* Functions of this global variable */	
    /* Add to cart function */
    const addToCart = (product) => console.log(`Se añade al carrito el producto de itemDetail. El producto añadido es: "${product.name}"`);
    /* Remove from cart function */
    const removeFromCart = (product) => console.log(product);
    /* Buy all products function */
    const buyAllProducts = () => console.log("Buy all products");

    //Everything inside children has access to cartContext functionalities
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAllProducts}} >
            {children}
        </CartContext.Provider>
    );
     }

export default CartProvider;
export {CartContext};

/* To use this, is similar to the react router format.
 We just have to englobe the app in the provider */