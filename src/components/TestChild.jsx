




export default function TestChild({products}){


    
    return (
 
         <>
             <h3 style={{marginTop: '2%'}}>
             Hijo
             </h3>
             <p>{products.map((value)=>{
                 return(
                     <span>{value}</span>
                 )
             })} </p>
             
         </>
 
 
    )
 }
 
 