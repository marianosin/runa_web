/* Maps items to the category.
But it is not in use as the mapping has been itegrated in the category container
This component is kept as backup in case the mapping is needed in the future.

*/
import React from 'react'

export default function CategoryList({categoryList}) {
  return (
    categoryList.map(category => <div>{category}</div>)
  )
}