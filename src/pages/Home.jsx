import React from 'react'
import MostrarProducto from '../components/MostrarProducto'
import { useState } from 'react'
import '../style.css'
import CargarProducto from '../components/CargarProducto'

function Home() {

  const [show, setShow] = useState(false)

  return (
    <div className='container'>
      <div className='container' style={{"marginTop":"250px"}}>
        <button type='button' className='buttMostrar btn btn-outline-danger' onClick={() => {setShow(!show)}}>Mostrar Productos</button>
        <button type='button' className='buttMandar btn btn-outline-danger' onClick={() => {}}><CargarProducto/></button>
      </div>
      <div className="card" hidden={!show} style={{"background-color" : "black", "alignItems" : 'center', "marginLeft":"150px"}}>
        <div className='row' hidden={!show} id='cardFetch'>
          { show && <MostrarProducto/>}
        </div>
      </div>
    </div>
  )
}

export default Home