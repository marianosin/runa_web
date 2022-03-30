import TestChild from "./TestChild"



export default function TestContainer(){

    let data = ["Producto 1", "Producto 2", "Producto 3"]
    
    function delProd() {
        alert("Para Funcionar debe introducir el concepto de estado.")
    }


   return (

        <>
            <h2 style={{marginTop: '2%'}}>
            Test para clase
            </h2>
            <TestChild products={data} delProd={delProd} />
        </>


   )
}

