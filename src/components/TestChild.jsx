//This component is just to train and learn all the concets before creating counter

import { useState } from "react"




export default function TestChild({products, delProd}){

     const [x, setX] = useState(0);

    
    return (
 
         <>
             <h3 style={{marginTop: '2%'}}>
             Hijo
             </h3>
             Lo siguiente viene de Contenedor padre
             <div>
                 <h4>Productos</h4>
                 {products.map((value)=>{
                     return(
                        <div>
                            {value}
                        </div>
                     )
                 })}
             </div>
             
            <div>

                <button onClick={()=>{delProd()}}> 
                Borra producto
                </button>
             </div>
             <div style={{backgroundColor: "green", margin: "2%", padding: "1%", border: "solid 3px "}}>
                 <button>Cambia x</button>
                 <p>
                     El valor de X es: {x}
                 </p>
             </div>
         </>
 
 
    )
 }
 
 