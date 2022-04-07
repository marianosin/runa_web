import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'
export default function Item({id, name, stock, price}) {
  return (
    <Card key={id}>
                
                <Card.Body>
                <Card.Title>{name} </Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto mollitia, error ut in nulla hic fuga nesciunt? In quod eaque consequuntur, incidunt obcaecati iure maiores?
                    <p>En stock: {stock} unidades </p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Card.Text>
                    Precio: ARS {price}
                </Card.Text>
                <Card.Text>
                    <ItemCount stock={5}/>
                </Card.Text>
                <Button  variant="primary">Agregar a carrito</Button>
                </Card.Footer>
            </Card>

  )
}
