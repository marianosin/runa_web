//This component is indended to be a grid ofproducts


export default function ItemListContainer({greetings}){

    let styles = {
        margin: '20px',
        width: '250px',
        backgroundColor: 'blue',
        display: 'inline-block',
      };
    return(
        <h1 style={styles} >Hola {greetings}, aquí se mostrarán los productos! </h1>
    )
}

