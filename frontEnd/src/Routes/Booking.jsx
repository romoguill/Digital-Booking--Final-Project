import './Booking.scss';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faStarHalf,
  faLocationDot,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

import BannerProductTitle from '../Components/BannerProductTitle';
import CustomCalendar from '../Components/RentalProducts/CustomCalendar';

import { useEffect, useState } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductPolicies from '../Components/ProductPolicies';

function Booking() {
  const params = useParams();
  const [productCategory, setProductCategory] = useState(null);
  const [productName, setProductName] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState(null);
  const [productLocation, setProductLocation] = useState(null);
  const [productPolicies, setProductPolicies] = useState(null);

  const selectOptions = [...Array(24).keys()];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/productos/id=${params.id}`
      );
      const data = await response.json();
      setProductCategory(data.producto.categoria.titulo);
      setProductName(data.producto.titulo);
      setMainImageUrl(data.imagenes[0].url);
      setProductLocation(data.producto.ciudad.nombre);
      setProductPolicies(data.producto.politicas);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container-page">
      <BannerProductTitle titulo={productName} categoria={productCategory} />

      <div className="booking-wrapper">
        <section className="booking container-main">
          <section className="booking__form">
            <h2 className="section-title">Completá tus datos</h2>
            <div className="section-wrapper">
              {/* TODO : Aca va el form de reservas */}
              Formulario
            </div>
          </section>

          <section className="booking__calendar">
            <h2 className="section-title">Seleccioná tu fecha de reserva</h2>
            <div className="section-wrapper">
              <CustomCalendar />
            </div>
          </section>

          <section className="booking__checkin-checkout">
            <h2 className="section-title">Tu horario de llegada</h2>
            <div className="section-wrapper">
              <h4>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Tu habitación va a estar lista para el check-in entre las 10:00
                AM y las 11:00 PM
              </h4>
              <p>Indicá tu horario estimado de llegada </p>
              <div className="wrapper-select">
                <select name="checkin-hour">
                  <option value="" disabled selected>
                    Seleccionar hora de llegada
                  </option>
                  {selectOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="dropdown-button"
                />
              </div>
            </div>
          </section>

          <section className="booking__details">
            <div className="section-wrapper">
              <h2 className="section-title">Detalle de la reserva</h2>
              <img src={mainImageUrl} alt="" />
              <h3 className="rental-category">{productCategory}</h3>
              <h2 className="rental-name">{productName}</h2>
              <div className="rental-rating--stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <p className="rental-location text-dark">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>{productLocation}</span>
              </p>
              <hr />
              <div className="check-info__wrapper">
                <div className="check-info checkin">
                  <h4>Check in</h4>
                  <p>__/__/__</p>
                </div>
                <hr />
                <div className="check-info checkout">
                  <h4>Check in</h4>
                  <p>__/__/__</p>
                </div>
                <hr />
                <button className="button-primary button-primary--full">
                  Confirmar reserva
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
      <ProductPolicies productPolicies={productPolicies} />
    </div>
  );
}

export default Booking;
