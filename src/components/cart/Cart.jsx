/* Cart logic and components to emulate the shopping list */
/* Imported components and functions*/
import React, {useEffect, useState} from 'react'
import { CartContext } from './CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

import { useContext } from 'react'
import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


/* Cart component */
export default function Cart() {
    /* Cart state */
     const {cart, removeFromCart, clearCart} = useContext(CartContext)
     /* Product ID captures the product ID from the URL
      and then it can be used to present it to the user*/
     const [productID, setProductID] = useState('')
     /* Captures user name and email to be identified and answered back if needed */
     const [name, setNamw] = useState('')
     const [email, setEmail] = useState('')
     
     const [nextStep, setNextStep] = useState(true)
     const [allSet, setAllSet] = useState(false)
     /* Captures the total amount a buyer has to pay */
     let [total, setTotal] = useState(0)
     /* The effect lets us render partial components  and act in consecuence as soon as something changes*/
      useEffect(() => {
        let auxTotal = 0
        cart.map((p) => {auxTotal = auxTotal + p.price * p.quantity})
        setTotal(auxTotal)
      }, [cart])
      /* These funcions are used to capture the user name and email */
      function handleName(e){
        setNamw(e.target.value)
      }
      function handleEmail(e){
        setEmail(e.target.value)
      }
      /* This funcion tells the app what to do when the user clicks on the "Next" button */
      function handleConfirm (e){
        e.preventDefault()
        let auxPurchise = {name: name, email: email, products: cart}
        alert('Su compra está siendo procesada. En breve le aparecerá su ID de compra')
        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, auxPurchise).then(({id}) => {alert("Su compra fue enviada correctamente. Será contactado para coordinar entrega.")
         setAllSet(true)
         
         setProductID(id)
        })
        
      }
      /* These funcions are the cart controls */
     function handleClearing(){
          clearCart()
      }
      function handleRemove(id){
          removeFromCart(id)
      }
      function handleBuy(){
        setNextStep(true)
        setOpen(true)
      }

      //Modal
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

     if (cart.length === 0) {
       return (
          <div key={'emptyCart'}>
            <h1>Carrito vacio</h1>
            <Link to={`/`} className="btn btn-secondary" >Ir al inicio</Link>
          </div>
       ) } else{ 
        return (
          <>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow key={'tableHeader'}>
                      <TableCell>Producto</TableCell>
                      <TableCell align="right">Cantidad</TableCell>
                      <TableCell align="right">Precio ($)</TableCell>
                      <TableCell align="right">Total</TableCell>
                      <TableCell align="right">Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {cart.map((item) => (
                    <TableRow
                    key={item.id} //It has its own id
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">
                      {item.quantity}
                    </TableCell>
                    <TableCell align="right">
                      {item.price}
                    </TableCell>
                    <TableCell align="right">
                      {item.price * item.quantity}
                    </TableCell>
                    <TableCell align="right">
                    <IconButton aria-label="delete" onClick={() => handleRemove(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                      
                    </TableCell>
                  </TableRow>
                  ))}
                  <TableRow key={'tableFooter'}>
                    <TableCell align='right' colSpan={3}><Button onClick={handleBuy} >Confirmar compra</Button></TableCell>
                    <TableCell align="right">{total}</TableCell>
                    <TableCell align="right">
                    <IconButton aria-label="delete" onClick={() => handleClearing()}>
                      <DeleteIcon /> 
                    </IconButton> 
                    </TableCell>
                  </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              
            </div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Ingrese sus datos
                </Typography>
                
                  {(!allSet)? <form onSubmit={handleConfirm}><TextField id="standard-basic" label="Nombre" onChange={handleName} style={{margin:3 } } /><TextField id="standard-basic" label="email" onChange={handleEmail}  style={{margin:3 } } /><Button type="submit" variant="contained" color="primary" >Confirmar</Button> <Button color="primary" onClick={handleClose}>Cerrar</Button> </form>: <div>Su compra fue enviada correctamente. Será contactado para coordinar entrega. Guarde su código de compra: {productID} </div>}
    
                  
                
              </Box>
            </Fade>
          </Modal>
          </>
  )
} }
