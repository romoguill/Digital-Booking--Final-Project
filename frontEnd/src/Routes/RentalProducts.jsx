import './RentalProducts.scss';

import { faClock, faWheelchair, faUtensils, faCar, faBanSmoking, faSwimmer, faShieldHalved, faJugDetergent, faSpa, faWifi, faBorderNone } from '@fortawesome/free-solid-svg-icons';

import GalleryProduct from '../Components/RentalProducts/GalleryProduct';
import Hero from '../Components/RentalProducts/Hero';
import Map from '../Components/RentalProducts/Map';
import CustomCalendar from '../Components/RentalProducts/CustomCalendar';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RentalProducts() {
  const params = useParams();
  const [noFound, setNoFound] = useState(false);
  const [producto, setProducto] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const iconComponents = {
    0: faBorderNone,
    1: faClock,
    2: faWheelchair,
    3: faUtensils,
    4: faCar,
    5: faBanSmoking,
    6: faSwimmer,
    7: faUtensils,
    8: faShieldHalved,
    9: faJugDetergent,
    10: faSpa,
    11: faWifi,
  };

  useEffect(() => {
    const fetchData = async () => {
      axios(`http://localhost:8080/productos/id=${params.id}`).then((res) => {
        setProducto(res.data.producto);
        setImagenes(res.data.imagenes);
      }).catch((res) => {
        if(res.response.status == 404) {
          setNoFound(true)
        }
      });
    };
    fetchData();
  }, [])

  return (
    <div className="rental-products container-page">
      {noFound && <Navigate replace to="/404" />}
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
          {producto.caracteristicas && producto.caracteristicas.map((item, i) => {
            return (
              <div className="item" key={i}>
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
          <CustomCalendar producto={producto} imagenes={imagenes} />
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
        <p className="location-address">{producto.ciudad && producto.ciudad.nombre}, Argentina</p>
        <Map producto={producto} imagenes={imagenes} />
      </section>

      <section className="policy container-main">
        <h2 className="section-title">¿Qué tenés que saber?</h2>
        <hr className="section-divider" />
        <div className="policy__items">
          {producto.politicas && producto.politicas.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h4><img src={item.url} className="politica-icon" /> {item.titulo}</h4>
                <p>{item.descripcion}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default RentalProducts;
