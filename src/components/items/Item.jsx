/* Comonent that creates cards to show the items.
This is the most important component as it is used by mane sections of the app.
To create the cards MUI is used.

*/
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
  /*Calls context to add items to cart */
  const {addToCart, cart, setCart} = useContext(CartContext)
  /* Stops the button from being clicked multiple times */
  const [stop, setStop] = useState(false)
  const [outOfStock, stOutOfStock] = useState(false)
  
    if (stock === 0) {
      stOutOfStock(true)
    }
  

  
  
    /* This function is called when the button is clicked.
    Adds the item to the cart.*/
  function handleClick(){
    
      let quantity = 1
      if (stop !== true) {
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
    
      <CardActions>
        <IconButton color="secondary" aria-label="add to shopping cart" onClick={handleClick}>
            {((stop !== true) || (outOfStock !== false) ) ? <AddShoppingCartIcon  />: <AddShoppingCartIcon  disabled style={{opacity: "30%"}} />}
        </IconButton>
      </CardActions>
    </Card>

  )
}
