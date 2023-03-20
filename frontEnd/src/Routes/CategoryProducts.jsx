import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import BannerProductTitle from '../Components/BannerProductTitle';
import Card from '../Components/Cards/CardRentalGrid';
import './CategoryProducts.scss';

function CategoryProducts() {
  const params = useParams();
  const [categoria, setCategoria] = useState({});
  const [productos, setProductos] = useState([]);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const fetchCategoryData = async () => {
      axios(`http://localhost:8080/categoria/id=${params.id}`)
        .then((res) => {
          setCategoria(res.data);
          fetchProductData();
        })
        .catch((res) => {
          if (res.response.status == 404) {
            setNoFound(true);
          }
        });
    };
    const fetchProductData = async () => {
      axios(`http://localhost:8080/productos/filterCat=${params.id}`)
        .then((res) => {
          if (typeof res.data === "string") {
            res.data = [];
          }
          setProductos(res.data);
        })
    };

    fetchCategoryData();
  }, []);

    return (
        <div className="category-products container-page">
          {noFound && <Navigate replace to="/404" />}
          <BannerProductTitle
            titulo={categoria.titulo}
            categoria={categoria.descripcion}
          />

            <div className="grid-rentals__grid">
            {productos.map((item) => {
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
                    caracteristicas={item.producto.politicas}
                />
                );
            })}
            </div>
        </div>
    );
}

export default CategoryProducts;