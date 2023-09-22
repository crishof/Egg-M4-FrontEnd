import React from 'react'
import { useParams } from 'react-router'

function Dinamica() {

    const {id} = useParams()
  return (
    <div>
      Dinamica {id} 
    </div>
  )
}

export default Dinamica
