import Card from '../Cards/CardRentalGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './GridRentals.scss';

function GridRentals() {

  const ENDPOINT_GET_PRODUCTOS = "http://localhost:8080/productos/todas"

  const [Deptos, setDeptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios(ENDPOINT_GET_PRODUCTOS)
      .then((res) => setDeptos(res.data));
    };
    fetchData();
  }, []);

  return (
    <section className="grid-rentals">
      <div className="container-main">
        <h2 className="text-dark section-header">Recomendaciones</h2>
        <div className="grid-rentals__grid">
          {Deptos.map((item) => {
            return (
              <Card
                key={item.producto.id}
                id={item.producto.id}
                imagen={item.imagenes[0].url}
                img_name={item.imagenes[0].titulo}
                categoria={item.producto.categoria.titulo}
                titulo={item.producto.titulo}
                ciudad={item.producto.ciudad.nombre}
                descripcion={item.producto.descripcion}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GridRentals;
