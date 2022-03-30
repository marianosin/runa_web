//This component is just to train and learn all the concets before creating counter




export default function TestChild({products}){

    let x = 0;

    
    return (
 
         <>
             <h3 style={{marginTop: '2%'}}>
             Hijo
             </h3>
             Lo siguiente viene de Contenedor padre
             <p>{products.map((value)=>{
                 return(
                     <div>{value}</div>
                 )
             })} </p>
             <div style={{backgroundColor: "green"}}>
                 Valor de x: {x}
             </div>
             
         </>
 
 
    )
 }
 
 