import './RentalProducts.scss';

import { faWifi, faClock, faCar, faSwimmer, faPaw, faSpa, faUtensils, faBorderNone } from '@fortawesome/free-solid-svg-icons';

import GalleryProduct from '../Components/RentalProducts/GalleryProduct';
import Hero from '../Components/RentalProducts/Hero';
import Map from '../Components/RentalProducts/Map';
import CustomCalendar from '../Components/RentalProducts/CustomCalendar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RentalProducts() {
  const params = useParams();
  const [producto, setProducto] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const iconComponents = {
    0: faBorderNone,
    1: faClock,
    3: faUtensils,
    4: faCar,
    6: faSwimmer,
    7: faUtensils,
    10: faSpa,
    11: faWifi,
    12: faPaw,
  };

  useEffect(() => {
    const fetchData = async () => {
      axios(`http://localhost:8080/productos/id=${params.id}`).then((res) => {
        setProducto(res.data.producto);
        setImagenes(res.data.imagenes);
        console.log(producto);
        console.log(imagenes);
      });
    };
    fetchData();
  }, [])

  return (
    <div className="rental-products container-page">
      <Hero producto={producto} imagenes={imagenes} />
      <GalleryProduct producto={producto} imagenes={imagenes} />

      <section className="product__description container-main">
        <h2 className="product__description__title section-title">
          Alójate en el corazón de {producto.ciudad && producto.ciudad.nombre}
        </h2>
        <p className="product__description__body">
          {producto.descripcion}
        </p>
      </section>

      <section className="product__ammenities container-main">
        <h2 className="section-title">¿Qué ofrece este lugar?</h2>
        <hr className="section-divider" />
        <div className="product__ammenities__items">
          {producto.caracteristicas && producto.caracteristicas.map((item) => {
            return (
              <div className="item">
                <FontAwesomeIcon icon={iconComponents[item.id]? iconComponents[item.id] : iconComponents[0] } className="ammenity-icon" />
                <h4>{item.titulo}</h4>
              </div>
            );
          })}
        </div>
      </section>

      <section className="booking container-main">
        <h2 className="booking__title section-title">Fechas disponibles</h2>
        <div className="booking__body">
          <CustomCalendar producto={producto} setProducto={setProducto} />
          <div className="booking__call-to-action">
            <h4>Agregá tus fechas de viaje para obtener precios exactos</h4>
            <button className="button-primary button-primary--full">
              Iniciar reserva
            </button>
          </div>
        </div>
      </section>

      <section className="location container-main">
        <h2 className="section-title">¿Dónde vas a estar?</h2>
        <hr className="section-divider" />
        <p className="location-address">Buenos Aires, Argentina</p>
        <Map producto={producto} setProducto={setProducto} />
      </section>

      <section className="policy container-main">
        <h2 className="section-title">¿Qué tenés que saber?</h2>
        <hr className="section-divider" />
        <div className="policy__items">
          <div className="item">
            <h4>Normas de las casa</h4>
            <p>Check-out: 10:00</p>
            <p>No se permiten fiestas</p>
            <p>No fumar</p>
          </div>
          <div className="item">
            <h4>Salud y seguridad</h4>
            <p>
              Se aplican las pautas de distanciamiento social y otras normas
              relacionadas con el coronavirus
            </p>
            <p>Detector de humo</p>
            <p>No fumar</p>
          </div>
          <div className="item">
            <h4>Política de cancelación</h4>
            <p>
              Agregá las fechas de tu viaje para obtener los detalles de
              cancelación de esta estadía.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RentalProducts;
