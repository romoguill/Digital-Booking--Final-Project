import React from "react";
import "./ReserveCard.scss";
import { Link } from "react-router-dom";

const ReserveCard = ({ reserva, producto }) => {
  return (
    <div className="reserve-card">
      <div>
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
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
