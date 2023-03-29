import React, { useEffect, useState } from "react";
import "./MyReservations.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../Components/Cards/CardRentalGrid";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import useLocalStorage from "../Hooks/useLocalStorage";
import ReserveCard from "../Components/Cards/ReserveCard";

const MyReservations = () => {
  const { auth } = useAuth();
  const [reservas, setReservas] = useState([]);
  // const [horaReserva, setHoraReserva] = useState("");
  // const [fechaReservaInicio, setFechaReservaInicio] = useState("");
  // const [fechaReservaFin, setFechaReservaFin] = useState("");
  const [productTitle, setProducTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productoConsultados, setProductoConsultados] = useState([]);
  const { storedValue } = useLocalStorage("token", null);

  const config = {
    headers: {
      Authorization: `Bearer ${storedValue}`,
      "Content-type": "application/json",
    },
  };

  const idUsuario = auth.userId;
  const idProductos = reservas.map((unaReserva) => unaReserva.idProducto);

  const ENDPOINT_GET_RESERVAS = `http://localhost:8080/reservas/idUsuario=${idUsuario}`;

  useEffect(() => {
    axios
      .get(ENDPOINT_GET_RESERVAS)
      .then((res) => {
        setReservas(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    idProductos.forEach((idProducto) => {
      const urlProducto = `http://localhost:8080/productos/id=${idProducto}`;
      fetch(urlProducto)
        .then((response) => response.json())
        .then((data) => {
          setProductoConsultados([...productoConsultados, data]);
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, []);

  if (reservas.length === 0) {
    return (
      <div className="reservation-container">
        <div className="reservation-title">Mis Reservas</div>
        <div className="no-reservation-container">
          <div className="no-reservation">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="no-reservation-icon fa-6x"
            />
            <h2>Aún no has efectuado ninguna reserva</h2>
            <Link to={"home"}>
              <h4>Volver al inicio</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-container">
      <div className="reservation-title">Mis Reservas</div>
      <div className="grid-rentals__grid">
        {reservas.map((unaReserva, index) => {
          return (
            <ReserveCard
              key={index}
              reserva={unaReserva}
              producto={productoConsultados[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyReservations;
