import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../utils/products'
import CategoryList from './CategoryList'
import ItemDetailContainer from './ItemDetailContainer'
export default function CategoryContainer() {
    let categoryList = products.map(p => p.category)
  return (
    <div>
        <CategoryList categoryList={categoryList}/>
    </div>
  )
}
