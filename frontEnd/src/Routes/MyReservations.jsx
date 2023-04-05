import React, { useEffect, useState } from 'react';
import './MyReservations.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
import useLocalStorage from '../Hooks/useLocalStorage';
import ReserveCard from '../Components/Cards/ReserveCard';

const MyReservations = () => {
  const { auth } = useAuth();
  const [reservas, setReservas] = useState([]);
  const [productoConsultados, setProductoConsultados] = useState([]);
  const [idProductos, setIdProductos] = useState([]);
  const { storedValue } = useLocalStorage('token', null);
  const [isLoading, setIsLoading] = useState(true);

  const config = {
    headers: {
      Authorization: `Bearer ${storedValue}`,
      'Content-type': 'application/json',
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // useEffect(() => {
  //   if (reservas.length > 0) {
  //     const fetchProductos = async () => {
  //       const promises = reservas.map(async (reserva) => {
  //         const urlProducto = `http://localhost:8080/productos/id=${reserva.idProducto}`;

  //         try {
  //           const response = await fetch(urlProducto);
  //           return await response.json();
  //         } catch (error) {
  //           console.error(error);
  //           return null;
  //         }
  //       });

  //       const productos = await Promise.all(promises);
  //       setProductoConsultados(productos);
  //       console.log(productoConsultados[0].imagenes[0].url)
  //     };

  //     fetchProductos();
  //   }
  // }, [reservas]);

  if (isLoading) {
    return <div className="container-page"></div>;
  }

  if (reservas.length === 0) {
    return (
      <div className="container-page">
        <div className="reservation-title">Mis Reservas</div>
        <div className="no-reservation-container">
          <div className="no-reservation">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="no-reservation-icon fa-6x"
            />
            <h2>Aún no has efectuado ninguna reserva</h2>
            <Link to={'/home'}>
              <h4>Volver al inicio</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page">
      <div className="reservation-title">Mis Reservas</div>
      <div className="reservation-container">
        {reservas.map((unaReserva, index) => {
          return <ReserveCard key={index} reserva={unaReserva} />;
        })}
      </div>
    </div>
  );
};

export default MyReservations;
