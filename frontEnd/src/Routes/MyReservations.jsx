import React, { useEffect, useState } from "react";
import "./MyReservations.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import useLocalStorage from "../Hooks/useLocalStorage";
import ReserveCard from "../Components/Cards/ReserveCard";

const MyReservations = () => {
  const { auth } = useAuth();
  const [reservas, setReservas] = useState([]);
  const [productoConsultados, setProductoConsultados] = useState([]);
  const [idProductos, setIdProductos] = useState([]);
  const { storedValue } = useLocalStorage("token", null);

  const config = {
    headers: {
      Authorization: `Bearer ${storedValue}`,
      "Content-type": "application/json",
    },
  };

  const idUsuario = auth.userId;

  const ENDPOINT_GET_RESERVAS = `http://localhost:8080/reservas/idUsuario=${idUsuario}`;

  useEffect(() => {
    axios
      .get(ENDPOINT_GET_RESERVAS)
      .then((res) => {
        setReservas(res.data);
        setIdProductos(reservas.map((unaReserva) => unaReserva.idProducto));
        // console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // useEffect(() => {
  //   setProductoConsultados([]);
  //   reservas.map((reserva) => {
  //     console.log({
  //       id: reserva.idProducto,
  //       idReserva: reserva.id,
  //     });
  //     const urlProducto = `http://localhost:8080/productos/id=${reserva.idProducto}`;

  //     fetch(urlProducto)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProductoConsultados([...productoConsultados, data]);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  // }, []);

  useEffect(() => {
    if (reservas.length > 0) {
      const fetchProductos = async () => {
        const promises = reservas.map((reserva) => {
          const urlProducto = `http://localhost:8080/productos/id=${reserva.idProducto}`;
  
          return fetch(urlProducto)
            .then((response) => response.json())
            .catch((error) => {
              console.error(error);
              return null;
            });
        });
  
        const productos = await Promise.all(promises);
        setProductoConsultados(productos);
      };
  
      fetchProductos();
    }
  }, [reservas]);

  if (reservas.length === 0) {
    return (
      <div>
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
    <>
      <div className="reservation-title">Mis Reservas</div>
      <div className="reservation-container">
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
    </>
  );
};

export default MyReservations;
