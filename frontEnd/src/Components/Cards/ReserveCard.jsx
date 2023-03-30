import React from "react";
import "./ReserveCard.scss";

const ReserveCard = ({ reserva, producto }) => {
  return (
    <div className="reserve-card">
      <div>
        <img src="" alt="asd" />
      </div>
      <div>
        <p>
          Check-In: <span>{reserva.fechaInicial}</span>
        </p>
        <p>
          Check-Out: <span>{reserva.fechaFinal}</span>
        </p>
        <p>
          Horario de la reserva: <span>{reserva.horaComienzo}</span>
        </p>
        {/* {producto.titulo}
        {producto.descripcion} */}
      </div>
    </div>
  );
};

export default ReserveCard;
