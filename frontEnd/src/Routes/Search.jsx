import axios from 'axios';
import es from 'date-fns/locale/es';
import { parse, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BannerProductTitle from '../Components/BannerProductTitle';
import Card from '../Components/Cards/CardRentalGrid';
import './Search.scss';

function Search() {
  const [params, setParams] = useSearchParams();
  const [productos, setProductos] = useState([]);
  const [displayFechaInicio, setDisplayFechaInicio] = useState("");
  const [displayFechaFin, setDisplayFechaFin] = useState("");
  const [displayCiudad, setDisplayCiudad] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      let ciudad = params.get("ciudad");
      let fechaInicio = null;
      let fechaFin = null;
      try {
        fechaInicio = params.get("fechaInicio")? parse(params.get("fechaInicio"), "dd/MM/yyyy", new Date()) : new Date();
        fechaFin = params.get("fechaFin")? parse(params.get("fechaFin"), "dd/MM/yyyy", new Date()) : new Date();

        if (fechaInicio > fechaFin) {
          fechaFin = fechaInicio;
        }
      } catch (e) {
        fechaInicio = new Date();
        fechaFin = new Date();
      }

      setDisplayFechaInicio(format(fechaInicio, "dd MMM yyyy", { locale: es }));
      setDisplayFechaFin(format(fechaFin, "dd MMM yyyy", { locale: es }));
      setDisplayCiudad(ciudad);

      axios(`http://localhost:8080/productos/filterCityFechas=${ciudad}?fechaInicio=${format(fechaInicio, "dd/MM/yyyy")}&fechaFin=${format(fechaFin, "dd/MM/yyyy")}`)
        .then((res) => {
          if (typeof res.data === "string") {
            res.data = [];
          }
          setProductos(res.data);
        })
    };

    fetchProductData();
  }, []);

  return (
    <div className="search-products container-page">
      <BannerProductTitle
        titulo={displayCiudad + " en las fechas: "+ displayFechaInicio + " a " + displayFechaFin}
        categoria="Resultados de búsqueda"
      />
      <div className="container-main product-list">
        <div className="grid-rentals__grid">
          {productos.map((item) => {
            return (
            <Card
              key={item.id}
              id={item.id}
              imagen={item.imagenes[0].url}
              img_name={item.imagenes[0].titulo}
              categoria={item.categoria.titulo}
              titulo={item.titulo}
              ciudad={item.ciudad.nombre}
              descripcion={item.descripcion}
              caracteristicas={item.caracteristicas}
            />
            );
          })}
          {productos.length === 1 && <div className='card-rental empty'></div>}
        </div>
      </div>
    </div>
  );
}

export default Search;