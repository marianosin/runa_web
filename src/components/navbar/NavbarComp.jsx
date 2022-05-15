import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../backups/CartWidget'
import { getDocs, getFirestore, collection, query } from 'firebase/firestore'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import { useState } from 'react'
import { CartContext } from '../cart/CartContext'
import { useContext, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
//Navbar function containing component to walk around aplication.
export default function NavbarComp()  {
    const {cart} = useContext(CartContext)
    /* categories to display in the navbar */
    const [categories, setCategories] = useState([])
    /*sum of elements in cart */
    const [sum, setSum] = useState(0)
    //Using useEffetct to render component as it changes
    useEffect(() => {
        let auxSum = 0

        for (let index = 0; index < cart.length; index++) {
            auxSum = auxSum + cart[index].quantity
        }
        setSum(auxSum)
    }, [cart])

    const db = getFirestore()

        const auxCat = query(collection(db, 'categories'))
        getDocs(auxCat).then((auxCat) => {
            setCategories(auxCat.docs.map((doc) => ({ ...doc.data()})))
        })
    return (
      <div className='NavBar'>
        <AppBar>
            <Toolbar>
                
                <Typography variant='h6' position='sticky'>
                    Runa Joyas
                </Typography>
                <Button component={Link} to='/' style={{color:'white', fontWeight: 'bold', marginLeft: 10}}>
                    INICIO
                </Button>
                {categories.map((category) => (
                    <Button key={category.name} component={Link} to={`/category/${category.name}`} style={{color:'white', fontWeight: 'bold', marginLeft: 10}}>
                        {category.name.toUpperCase()}
                    </Button>
                ))}
                
                
                {(cart.length > 0) ? <Button component={Link} to='/cart' style={{color:'white', fontWeight: 'bold', marginLeft: 10}}><div style={{display: 'flex'}}><CartWidget  /> ({sum})</div> </Button>   : null}
                
            </Toolbar>
            
        </AppBar>
        <div style={{marginTop:80}}></div>
      </div>
    )
  
}
