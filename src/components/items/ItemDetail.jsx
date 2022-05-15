import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'
import styled from 'styled-components'
import { useEffect } from 'react'
import {CircularProgress} from '@material-ui/core'
const ItemContainer = styled.div`
  display: flex;
  item-align: center;
  justify-content: center;
  border: 1px solid black;
  width: 70%;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  img {
    width: 20vw;
    border-radius: 50%;
  }
  h3 {
    margin: 0;
    color:  #000066;
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    margin: 4px;
    font-size: 1rem;
    color: #000066;
  }
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .price {
    font-size: 1.2rem;
    color: #000066;
    font-weight: bold;
  }
`
const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  flex-direction: column;

  
  align-items: center;
  justify-content: space-between;
  `
const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `



export default function ItemDetail({item}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (item.image !== '') {
      setLoading(false)
    }
  
  }, [item.image])
  
  

  if (loading) {
    return <div style={{marginTop: '3%'}}><CircularProgress /></div>
  } else {
    return (
      <DetailContainer >
  
        <ItemContainer>
          
          <img src={item.image} alt={item.name}/>
          <TextDescription>
  
  
            <h3>{item.name}</h3>
            <div>
            <p>{item.description}</p>
            </div>
            <div className="price">
              <p>Precio: ${item.price}</p>
            </div>
          </TextDescription>
          <ItemCount id={item.id} name={item.name} stock={item.stock} price={item.price} image={item.image}/>
        </ItemContainer>
      </DetailContainer>
      
    )
  }
  
  
}
