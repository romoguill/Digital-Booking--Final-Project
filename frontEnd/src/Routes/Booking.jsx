import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BannerProductTitle from '../Components/BannerProductTitle';

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

      <section className="booking ">
        <section className="product__description container-main">
          <h2 className="section-title">Completá tus datos</h2>
          {/* TODO : Aca va el form de reservas */}
        </section>
      </section>
    </div>
  );
}

export default Booking;
