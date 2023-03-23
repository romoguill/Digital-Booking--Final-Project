import './RentalProducts.scss';
import GalleryProduct from '../Components/RentalProducts/GalleryProduct';
import Hero from '../Components/RentalProducts/Hero';
import Map from '../Components/RentalProducts/Map';
import CustomCalendar from '../Components/RentalProducts/CustomCalendar';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductPolicies from '../Components/ProductPolicies';
import useAuth from '../Hooks/useAuth';

function RentalProducts() {
  const params = useParams();
  const [valueDateRange, setValueDateRange] = useState(null);
  const [noFound, setNoFound] = useState(false);
  const [producto, setProducto] = useState({});
  const [imagenes, setImagenes] = useState([]);

  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      axios(`http://3.144.19.234:8080/productos/id=${params.id}`)
        .then((res) => {
          setProducto(res.data);
          setImagenes(res.data.imagenes);
        })
        .catch((res) => {
          if (res.response.status == 404) {
            setNoFound(true);
          }
        });
    };
    fetchData();
  }, []);

  return (
    <div className="rental-products container-page">
      {noFound && <Navigate replace to="/404" />}
      <Hero producto={producto} imagenes={imagenes} />
      <GalleryProduct producto={producto} imagenes={imagenes} />

      <section className="product__description container-main">
        <h2 className="product__description__title section-title">
          Alójate en el corazón de {producto.ciudad && producto.ciudad.nombre}
        </h2>
        <p className="product__description__body">{producto.descripcion}</p>
      </section>

      <section className="product__ammenities container-main">
        <h2 className="section-title">¿Qué ofrece este lugar?</h2>
        <hr className="section-divider" />
        <div className="product__ammenities__items">
          {producto.caracteristicas &&
            producto.caracteristicas.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <img
                    src={item.url}
                    alt={item.titulo}
                    className="ammenity-icon"
                  />
                  <h4>{item.titulo}</h4>
                </div>
              );
            })}
        </div>
      </section>

      <section className="booking container-main">
        <h2 className="booking__title section-title">Fechas disponibles</h2>
        <div className="booking__body">
          <CustomCalendar
            producto={producto}
            imagenes={imagenes}
            setValueDateRange={setValueDateRange}
          />
          <div className="booking__call-to-action">
            <h4>Agregá tus fechas de viaje para obtener precios exactos</h4>
            <Link
              className="button-primary button-primary--full"
              to={`/producto/${params.id}/reserva`}
            >
              Iniciar reserva
            </Link>
          </div>
        </div>
      </section>

      <section className="location container-main">
        <h2 className="section-title">¿Dónde vas a estar?</h2>
        <hr className="section-divider" />
        <p className="location-address">
          {producto.ciudad && producto.ciudad.nombre}, Argentina
        </p>
        <Map producto={producto} imagenes={imagenes} />
      </section>

      <ProductPolicies productPolicies={producto.politicas} />
    </div>
  );
}

export default RentalProducts;
