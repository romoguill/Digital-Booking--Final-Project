import React from 'react'
import './ProductCreateSuccess.scss'
import ReservaIcon from '../assets/Images/reserva-exito.png'
import { Link } from 'react-router-dom'

const ProductCreateSuccess = () => {
  return (
    <div className='productSuccess-container'>
        <div className='productSuccess-card'>
            <img src={ReservaIcon} alt="Producto Creado Exito" />
            <p>Tu propiedad se ha creado con éxito</p>
            <Link to={'home'}>
                <button>Ok</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCreateSuccess