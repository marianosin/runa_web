import React from 'react'

export default function CategoryList({categoryList}) {
  return (
    categoryList.map(category => <div>{category}</div>)
  )
}