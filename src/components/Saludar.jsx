import React from 'react'

export default function Saludar({name, lastname}) {
    let fullName = name + " " + lastname
    return (
      <p>Hola {fullName}, ¿Cómo estás?</p>
    )
  
}
