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
                 <div><button onClick={()=>{x = 1
                    console.log(x)
                }}> Cambia valor x</button></div>
                 Valor de x: {x}
             </div>
             
         </>
 
 
    )
 }
 
 