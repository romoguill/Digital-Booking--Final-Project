import React from 'react';
import './BookingSuccess.scss';
import ReservaIcon from '../assets/Images/reserva-exito.png';
import { Link } from 'react-router-dom';

const BookingSuccess = () => {
  return (
    <div className="container-page">
      <div className="success-container">
        <div className="success-card">
          <img src={ReservaIcon} alt="Reserva Exitosa" />
          <h2>¡Muchas gracias!</h2>
          <p>Su reserva se ha realizado con éxito</p>
          <Link to={'/'}>
            <button>Ok</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
