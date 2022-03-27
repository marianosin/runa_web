//This component is indended to be a grid ofproducts
import {Card, CardGroup} from 'react-bootstrap'

export default function ItemListContainer({greetings}){

   return (

    <div className='Novedades'>

        <h2>Novedades</h2>
        <CardGroup>
            <Card>
                
                <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto mollitia, error ut in nulla hic fuga nesciunt? In quod eaque consequuntur, incidunt obcaecati iure maiores?
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Card.Text>
                    Precio: ARS 20000
                </Card.Text>
                </Card.Footer>
            </Card>
            <Card>
                
                <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto mollitia, error ut in nulla hic fuga nesciunt? In quod eaque consequuntur, incidunt obcaecati iure maiores?
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Card.Text>
                    Precio: ARS 20000
                </Card.Text>
                </Card.Footer>
            </Card>
            
        </CardGroup>
        
    </div>


   )
}

