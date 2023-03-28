import React, { useEffect, useState } from "react";
import "./MyReservations.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../Components/Cards/CardRentalGrid";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import useLocalStorage from "../Hooks/useLocalStorage";

const MyReservations = () => {
  const { auth } = useAuth();
  const [userId, setUserId] = useState("")
  const [reservas, setReservas] = useState([]);
  const [productosReservados, setProductosReservados] = useState([]);

  const ENDPOINT_GET_USUARIO = "http://localhost:8080/usuarios/" + auth.userEmail;
  const ENDPOINT_GET_RESERVAS = "http://localhost:8080/reservas/";
  const ENDPOINT_GET_PRODUCTOS = "http://localhost:8080/productos/";

  useEffect(() => {
    axios
      .get(ENDPOINT_GET_USUARIO)
      .then((res) => {
        console.log(res)
        setUserId(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log(auth)
      });
  }, []);

//   useEffect(() => {
//     axios
//       .get(ENDPOINT_GET_RESERVAS + `${userId}`)
//       .then((res) => {
//         setReservas(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, [userId]);

//   useEffect(() => {
//     if (reservas.length > 0) {
//       Promise.all(
//         reservas.map((reserva) =>
//           axios.get(ENDPOINT_GET_PRODUCTOS + `${reserva.productoId}`)
//         )
//       )
//         .then((res) => {
//           setProductosReservados(res.map((r) => r.data));
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }
//   }, [reservas]);

  if (productosReservados.length === 0) {
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
        {productosReservados.map((item) => {
          return (
            <Card
              key={item.id}
              // id={item.id}
              // imagen={item.imagenes[0].url}
              // img_name={item.imagenes[0].titulo}
              // categoria={item.categoria.titulo}
              // titulo={item.titulo}
              // ciudad={item.ciudad.nombre}
              // descripcion={item.descripcion}
              // caracteristicas={item.caracteristicas}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyReservations;
