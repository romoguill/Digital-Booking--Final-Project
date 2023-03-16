import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BannerProductTitle from '../Components/BannerProductTitle';
import CustomCalendar from '../Components/RentalProducts/CustomCalendar';
import './Booking.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CheckIn from '../assets/Images/check-in.png'

function Booking() {
  const params = useParams();
  const [productCategory, setProductCategory] = useState(null);
  const [productName, setProductName] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/productos/id=${params.id}`
      );
      const data = await response.json();
      setProductCategory(data.producto.categoria.titulo);
      setProductName(data.producto.titulo);
      setMainImageUrl(data.imagenes[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="container-page">
      <BannerProductTitle titulo={productName} categoria={productCategory} />

      <div className='booking-main-page'>
        
        <section className="booking">
          <section className="product__description container-main">
            <h2 className="section-title">Completá tus datos</h2>
            {/* TODO : Aca va el form de reservas */}
            <div className='form-container'>
              <form action="">
                <p>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" placeholder='Bruno' />
                </p>
                <p>
                  <label htmlFor="last-name">Apellido</label>
                  <input type="text" id="last-name" placeholder='Rodriguez' />
                </p>
                <p>
                  <label htmlFor="email">Correo electronico</label>
                  <input type="email" id="email" placeholder='brodiguez@gmail.com' />
                </p>
                <p>
                  <label htmlFor="city">Ciudad</label>
                  <input type="text" id="city" placeholder='Ciudad' className='cityInput'/>
                </p>
              </form>
            </div>
          </section>

          <section className='booking-calendar container-main'>
            <h2 className="section-title">Seleccioná tu fecha de reserva</h2>
            <div>
              <CustomCalendar className/> 
            </div>
          </section>

          <section className='booking-time container-main'>
            <h2 className="section-title">Tu horario de llegada</h2>
            <div className='time-container'>
              <div className='check-in-hour'>
                <img src={CheckIn} alt="check-in" />
                <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
              </div>
              <div className='hour-select'>
                <label>Indicá tu horario estimado de llegada</label>
                <input list='hour' placeholder='Seleccionar hora de llegada' required/>
                <datalist id='hour'>
                  <option value='00:00'></option>
                  <option value="01:00"></option>
                  <option value="02:00"></option>
                  <option value="03:00"></option>
                  <option value="04:00"></option>
                  <option value="05:00"></option>
                  <option value="06:00"></option>
                  <option value="07:00"></option>
                  <option value="08:00"></option>
                  <option value="09:00"></option>
                  <option value="10:00"></option>
                  <option value="11:00"></option>
                  <option value="12:00"></option>
                  <option value="13:00"></option>
                  <option value="14:00"></option>
                  <option value="15:00"></option>
                  <option value="16:00"></option>
                  <option value="17:00"></option>
                  <option value="18:00"></option>
                  <option value="19:00"></option>
                  <option value="20:00"></option>
                  <option value="21:00"></option>
                  <option value="22:00"></option>
                  <option value="23:00"></option>
                  <option value="24:00"></option>
                </datalist>
              </div>
            </div>
          </section>
          
          <section className='booking-politics container-main'>
            <h2 className="section-title">Qué tenés que saber</h2>
            <div className="politics-container">

              <div className='politics'>
                <h3>Normas de la casa</h3>
                <p>Check-out: 10:00</p>
                <p>No se permiten fiestas</p>
                <p>No fumar</p>
              </div>

              <div className='politics'>
                <h3>Salud y seguridad</h3>
                <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
                <p>Detector de humo</p>
                <p>Depósito de seguridad</p>
              </div>

              <div className='politics'>
                <h3>Política de cancelación</h3>
                <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</p>
              </div>

            </div>

          </section>

        </section>

        <section className='detail'>
          <div className='detail-container'>
            <h2 className="section-title">Detalle de la reserva</h2>
            <img src="" alt="" />
            <h3 className="rental-category text-gray-light">HOTEL</h3>
            <h2 className="rental-name text-dark">Hermitage Hotel</h2>
            <div className="rental-rating--stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="rental-location text-dark">
              <span className='location-icon'>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span>Av. Colón 1643, Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</span>
            </p>
            <div className='check-booking-in'>
              <h3>Check In</h3>
              <p>23/11/2021</p>
            </div>
            <div className='check-booking-out'>
              <h3>Check Out</h3>
              <p>27/11/2021</p>
            </div>
            <Link to={"reserva_confirmada"}> 
              <button>Confirmar reserva</button>
            </Link>

          </div>
        </section>
      </div>

    </div>
  );
}

export default Booking;
