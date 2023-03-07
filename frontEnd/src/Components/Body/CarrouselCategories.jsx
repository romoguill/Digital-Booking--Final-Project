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


  // useEffect(() => {
  //   const options = { method: 'GET' };

  //   fetch('http://localhost:8080/categoria/todas', options)
  //     .then((response) => {
  //       if (!response.ok) throw new Error();
  //       return response.json();
  //     })
  //     .then((response) => setCategorias(response))
  //     .catch((e) => {
  //       setError('No se pudo recuperar la informacion');
  //       console.error(e);
  //     });
  // }, []);

  // TODO: Eliminar el codigo relevante a las pruebas estaticas

  const dataPrueba = [
    {
      id: 1,
      data: {
        titulo: 'Hoteles',
        urlImagen: 'src/assets/Images/hotel-img-1.png',
      },
    },

    {
      id: 2,
      data: {
        titulo: 'Hostels',
        urlImagen: 'src/assets/Images/hotel-img-2.png',
      },
    },

    {
      id: 3,
      data: {
        titulo: 'Departamentos',
        urlImagen: 'src/assets/Images/hotel-img-3.png',
      },
    },

    {
      id: 4,
      data: {
        titulo: 'Bed and breakfast',
        urlImagen: 'src/assets/Images/hotel-img-4.jpg',
      },
    },
  ];

  return (
    <section className="section__categories">
      <div className="container-main">
        <h2 className="text-dark section-header">
          Buscar por tipo de alojamiento
        </h2>
        <div className="container-categories">
          {/* {Categorias.map((item) => {
            <CategoriaCard 
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              imagen={item.urlImagen}
            />
          })
          } */}
          <CategoriaCard key={dataPrueba[0].id} data={dataPrueba[0].data} />
          <CategoriaCard key={dataPrueba[1].id} data={dataPrueba[1].data} />
          <CategoriaCard key={dataPrueba[2].id} data={dataPrueba[2].data} />
          <CategoriaCard key={dataPrueba[3].id} data={dataPrueba[3].data} />

          {/* Descomentar al terminar las pruebas */}
          {/* {!error ? (
            categorias
              .slice(0, 4)
              .map((categoria) => (
                <CategoriaCard key={categoria.id} data={categoria} />
              ))
          ) : (
            <p className="text-dark">{error}</p>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default CarrouselCategories;
