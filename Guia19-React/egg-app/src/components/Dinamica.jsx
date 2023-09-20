import React from 'react'
import { useParams } from 'react-router-dom'
import Dinamica from './Dinamica';

export default function Dinamica() {
    const {id} = useParams()
  return (
    <div>Dinamica</div>
  )
}
