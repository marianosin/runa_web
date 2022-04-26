import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { cardActionAreaSx, itemCardSx } from './style/itemCardSx';
import {Link} from 'react-router-dom'
import { useContext, useState } from 'react';
import { CartContext } from '../cart/CartContext';
export default function Item({id, category, name, stock, description, price, image}) {
  const {addToCart, cart, setCart} = useContext(CartContext)
  const [stop, setStop] = useState(false)
  function handleClick(){
    
      let quantity = 1
      
      while (stop !== true) {
        addToCart({id, name, quantity, price, image, cart, setCart})
        setStop(true)
      }
      
      

}
  
  return (
    
    <Card sx={itemCardSx } key={id}  >
      {/*<Link to={'/category/collares'} style={{color: 'none', textDecoration: 'none'}} >*/}
      <CardActionArea sx={cardActionAreaSx} component={Link} to={`/category/${category}/product/${id}`} >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/*</Link>*/}
     
      <CardActions>
        <IconButton color="secondary" aria-label="add to shopping cart">
            <AddShoppingCartIcon onClick={handleClick} />
        </IconButton>
      </CardActions>
    </Card>

  )
}
