import './RentalProducts.scss';

import { FaWifi } from 'react-icons/fa';

import GalleryProduct from '../Components/RentalProducts/GalleryProduct';
import Hero from '../Components/RentalProducts/Hero';

function RentalProducts() {
  return (
    <div className="rental-products container-page">
      <Hero />
      <GalleryProduct />

      <section className="product__description container-main">
        <h2 className="product__description__title section-title">
          Alójate en el corazón de Buenos Aires
        </h2>
        <p className="product__description__body">
          Está situado a solo unas calles de la avenida Alvear, de la avenida
          Quintana, del parque San Martín y del distrito de Recoleta. En las
          inmediaciones también hay varios lugares de interés, como la calle
          Florida, el centro comercial Galerías Pacífico, la zona de Puerto
          Madero, la plaza de Mayo y el palacio Municipal. Nuestros clientes
          dicen que esta parte de Buenos Aires es su favorita, según los
          comentarios independientes. El Hotel es un hotel sofisticado de 4
          estrellas que goza de una ubicación tranquila, a poca distancia de
          prestigiosas galerías de arte, teatros, museos y zonas comerciales.
          Además, hay WiFi gratuita. El establecimiento sirve un desayuno
          variado de 07:00 a 10:30.
        </p>
      </section>

      <section className="product__ammenities container-main">
        <h2 className="section-title">¿Qué ofrece este lugar?</h2>
        <hr className="section-divider" />
        <div className="product__ammenities__items">
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
          <div className="item">
            <FaWifi className="ammenity-icon" />
            <h4>Wifi</h4>
          </div>
        </div>
      </section>

      <section className="booking container-main">
        <h2 className="booking__title section-title">Fechas disponibles</h2>
        <div className="booking__body">
          <div
            className="calendar"
            style={{ backgroundColor: 'lime', width: '400px', height: '200px' }}
          >
            Calendario
          </div>
          <div className="booking__call-to-action">
            <h4>Agregá tus fechas de viaje para obtener precios exactos</h4>
            <button className="button-primary button-primary--full">
              Iniciar reserva
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RentalProducts;
