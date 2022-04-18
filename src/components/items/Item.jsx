import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
export default function Item({id, category, name, stock, description, price, image}) {
  return (
    
    <Card key={id} className="mainCardSize cardStyle" style={{border: 'none'}}>
    <Link to={`/category/${category}/product/${id}`}  >          
                <Card.Body className='cardBody'>
                <Card.Title>{name} </Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Text>
                    <p>{description} </p>
                    <p>En stock: {stock} unidades </p>
                    <p>Precio:{price} </p>
                    
                </Card.Text>

                </Card.Body>
                
                </Link>
            </Card>
        

  )
}
