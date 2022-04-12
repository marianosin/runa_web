import React from 'react'

import products from '../utils/products'
import CategoryList from './CategoryList'

export default function CategoryContainer() {
    let categoryList = products.map(p => p.category)
  return (
    <div>
        <CategoryList categoryList={categoryList}/>
    </div>
  )
}
