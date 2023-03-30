import React from "react";
import "./ReserveCard.scss";
import { Link } from "react-router-dom";

const ReserveCard = ({reserva, producto }) => {
  return (
    <div className="reserve-card">
      <div>
        <img
          src={producto.imagenes[1].url}
          alt={producto.titulo}
        />
      </div>
      <div className="reserve-details">
        <h2>{producto?.titulo}</h2>
        <p>
          Check-In: <span>{reserva.fechaInicial}</span>
        </p>
        <p>
          Check-Out: <span>{reserva.fechaFinal}</span>
        </p>
        <p>
          Horario de la reserva: <span>{reserva.horaComienzo}</span>
        </p>
        <Link to={`${producto}/:id`}>
          <button>Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default ReserveCard;
