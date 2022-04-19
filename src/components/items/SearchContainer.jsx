import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { useEffect, useState } from 'react'
import products from '../utils/products'
import isLoaded from '../utils/isLoaded'
import getSearch from '../utils/getSearch'
export default function SearchContainer() {
    const [items, setItems] = useState([]);
    const { search } = useParams()
    useEffect(() => {
      getSearch(1000, products)
        .then(result => setItems(result))
        .catch(error => console.log(error))
      
      }, [items])
    
    const searchProducts = items.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) || []
    console.log(searchProducts)
    return (
        <div style={{display: "flex"}}>
                {(searchProducts.length > 0) ? searchProducts.map(p => <Item key={p.id} image={p.image} description={p.description} name={p.name} stock={p.stock} price={p.price} />) : <div >No results</div>}
        </div>
  )
}
