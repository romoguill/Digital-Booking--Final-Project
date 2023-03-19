import React from 'react';
import './CarrouselCategories.scss';
import { Link } from 'react-router-dom';

const CategoriaCard = ({ data, id }) => {
  return (
    <div key={id} className="card-category">
      <div className="container-img">
        <img src={data.urlImagen} alt={"Imagen de la Categoria " + data.titulo} />
      </div>
      <div className="container-content">
        <h3><Link to={`/categoria/${id}`}>{data.titulo}</Link></h3>
        <p>{data.descripcion}</p>
      </div>
    </div>
  );
};

export default CategoriaCard;
