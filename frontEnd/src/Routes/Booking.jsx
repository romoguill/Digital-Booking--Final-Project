import './Booking.scss';

import axios from 'axios';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faStarHalf,
  faLocationDot,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

import BannerProductTitle from '../Components/BannerProductTitle';
import CustomCalendar from '../Components/RentalProducts/CustomCalendar';

import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductPolicies from '../Components/ProductPolicies';
import { AuthContext } from '../Contexts/AuthContext';
import useAuth from '../Hooks/useAuth';

function Booking() {
  const params = useParams();

  const [productCategory, setProductCategory] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productId, setProductId] = useState(null)
  const [mainImageUrl, setMainImageUrl] = useState(null);
  const [productLocation, setProductLocation] = useState(null);
  const [productPolicies, setProductPolicies] = useState(null);
  const [valueDateRange, setValueDateRange] = useState(null);

  const { auth } = useAuth()

  const [formMessage, setFormMessage] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    time: '',
    email: '',
  });

  const datosUsuario = {
    userName : auth.userName,
    userLastName: auth.userLastName,
    userMail: auth.userEmail
  }

  const ENDPOINT_POST = 'http://localhost:8080/reservas/crear';

  const peticionPost = async () => {
  
    let horaComienzo = "10:00"
    let emailUsuario = formData.email
    let fechaInicial = valueDateRange[0]
    let fechaFinal = valueDateRange[1]

    const formDataSend = {
      horaComienzo: horaComienzo,
      fechaInicial: fechaInicial,
      fechaFinal: fechaFinal,
      idProducto: productId,
      emailUsuario: emailUsuario
    };

    const options = {
      method: 'POST',
      url: ENDPOINT_POST,
      headers: {
        Authorization: auth,
      },
      body: formDataSend
    };

    await axios
      .request(options)
      .then((response) => {
        if (response.status == 201) {
          navigate('/reserva_confirmada');
        } else {
          setFormMessage(
            'Lamentablemente la reserva no ha podido realizarse”. Por favor, intente más tarde'
          );
        }
      })
      .catch((err) => {
        console.log(err.message);
        console.log(formDataSend)
      });
  };

  const handleChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleTimeChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const selectOptions = [...Array(24).keys()];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/productos/id=${params.id}`
      );
      const data = await response.json();
      setProductCategory(data.categoria.titulo);
      setProductName(data.titulo);
      setMainImageUrl(data.imagenes[0].url);
      setProductLocation(data.ciudad.nombre);
      setProductPolicies(data.politicas);
      setProductId(data.id);
      console.log(data);
      console.log(valueDateRange[0])
    };
    fetchData();
  }, []);

  return (
    <div className="container-page">
      <BannerProductTitle titulo={productName} categoria={productCategory} />
      {formMessage}

      <div className="booking-wrapper">
        <section className="booking container-main">
          <section className="booking__form">
            <h2 className="section-title">Completá tus datos</h2>
            <div className="section-wrapper">
              <div className="form-container">
                <form>
                  <div>
                    <label htmlFor="name" className="label-input">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder=""
                      className="form-input"
                      required
                      name="name"
                      disabled
                      value={datosUsuario.userName}
                    />
                    <label htmlFor="last-name" className="label-input">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder=""
                      className="form-input"
                      required
                      name="lastname"
                      disabled
                      value={datosUsuario.userLastName}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-input">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder=""
                      className="form-input"
                      required
                      disabled
                      name="email"
                      value={datosUsuario.userMail}
                    />
                    <label htmlFor="city" className="label-input">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder=""
                      className="cityInput form-input"
                      required
                      name="city"
                      onChange={handleChange}
                      value={formData ? formData.city : ''}
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="booking__calendar">
            <h2 className="section-title">Seleccioná tu fecha de reserva</h2>
            <div className="section-wrapper">
              <CustomCalendar
                allowRange={true}
                valueDateRange={valueDateRange}
                setValueDateRange={setValueDateRange}
              />
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
                <select
                  name="checkin-hour"
                  id="time"
                  onChange={handleTimeChange}
                  value={formData ? formData.time : ''}
                >
                  <option disabled defaultValue={'Seleccionar hora de llegada'}>
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

              <div className="booking__details__content">
                <img src={mainImageUrl} alt="" />
                <div className="booking__details__content__info">
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
                      <p>
                        {valueDateRange
                          ? valueDateRange[0].toLocaleDateString()
                          : '__/__/__'}
                      </p>
                    </div>
                    <hr />
                    <div className="check-info checkout">
                      <h4>Check out</h4>
                      <p>
                        {' '}
                        {valueDateRange
                          ? valueDateRange[1].toLocaleDateString()
                          : '__/__/__'}
                      </p>
                    </div>
                    <hr />
                    <button
                      onClick={peticionPost}
                      className="button-primary button-primary--full"
                    >
                      Confirmar reserva
                    </button>
                  </div>
                </div>
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
