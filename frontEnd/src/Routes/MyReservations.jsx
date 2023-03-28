import React from "react";
import "./MyReservations.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../Components/Cards/CardRentalGrid";

const MyReservations = () => {
  const [reservas, setReservas] = useState([]);
  const [productosReservados, setProductosReservados] = useState([]);

  const ENDPOINT_GET_RESERVAS = ""
  const ENDPOINT_GET_PRODUCTOS = "http://localhost:8080/productos/"

  useEffect(() => {
    axios
      .get(`tu-endpoint-de-reservas/${userId}/reservas`)
      .then((res) => {
        setReservas(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userId]);

  useEffect(() => {
    if (reservas.length > 0) {
      Promise.all(
        reservas.map((reserva) =>
          axios.get(ENDPOINT_GET_PRODUCTOS + `${reserva.productoId}`)
        )
      )
        .then((res) => {
          setProductosReservados(res.map((r) => r.data));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [reservas]);

  return (
    <div className="reservation-container">
      <div className="reservation-title">Mis Reservas</div>
      {productosReservados.map((producto) => (
        <li key={producto.id}>
          <Card producto={producto} />
        </li>
      ))}
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
};

export default MyReservations;
