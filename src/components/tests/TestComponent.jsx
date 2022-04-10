import React from 'react'

export default function TestComponent({universities}) {
  return (
    <div>
      <h3>Test component</h3>
      {universities.map(item=>{
        return(
          <div>
            <div style={{backgroundColor:"blue"}}>
              {item.name}
            </div>
            <div style={{backgroundColor: "green"}}>
              {item.country}
            </div>
          </div>
        )
      })}
     </div>
  )
}
