//This component is just to train and learn all the concets before creating counter

import { useEffect, useState } from "react"




export default function TestChild({products, delProd}){
    //hook
     const [x, setX] = useState(0);

     //Hook to lificicle. it tells react when to render certain variables
     //just once
     useEffect(()=>{
         
        //Aqui va fetch para llamar base de datos solo cuando se abre por primera vez
        
        } , [])
    //When a state changes
    useEffect(()=>{
         
        //dark light mode for example
        
        } , [x])
    //At the moment of demounting. the array has to be empty
    useEffect(()=>{
         
        return()=>{
            //What to do when the user leavs the component
        }
        
        } , [])
    //When undefined, it renders all 
    useEffect(()=>{
         
        
        
        } )
    return (
 
         <>
             <h3 style={{marginTop: '2%'}}>
             Hijo
             </h3>
             Lo siguiente viene de Contenedor padre
             
             
            <div>

                <button onClick={()=>{delProd()}}> 
                Borra producto
                </button>
             </div>
             <div style={{backgroundColor: "green", margin: "2%", padding: "1%", border: "solid 3px "}}>
                 <button onClick={()=> { setX(x+1);}}>+</button><button onClick={()=> { setX(x-1);}}>-</button>
                 <p>
                     El valor de X es: {x}
                 </p>
             </div>
         </>
 
 
    )
 }
 
 