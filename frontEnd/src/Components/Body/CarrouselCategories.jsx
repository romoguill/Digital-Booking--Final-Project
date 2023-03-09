import { useEffect, useState } from 'react';
import './CarrouselCategories.scss';
import CategoriaCard from './CategoriaCard';
import axios from 'axios';

function CarrouselCategories() {
  const [Categorias, setCategorias] = useState([]);
  const [error, setError] = useState();

  const ENDPOINT_GET_CATEGORIAS = "http://localhost:8080/categoria/todas"

  useEffect(() => {
    const fetchData = async () => {
      axios(ENDPOINT_GET_CATEGORIAS)
      .then((res) => setCategorias(res.data))
    };
    fetchData();
  }, []);

  return (
    <section className="section__categories">
      <div className="container-main">
        <h2 className="text-dark section-header">
          Buscar por tipo de alojamiento
        </h2>
        <div className="container-categories">
          {Categorias.map((item) => {
            <CategoriaCard
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              imagen={item.urlImagen}
            />
          })
          }
          {!error ? (
            Categorias
              .slice(0, 4)
              .map((categoria) => (
                <CategoriaCard key={categoria.id} data={categoria} />
              ))
          ) : (
            <p className="text-dark">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CarrouselCategories;
