import React from 'react';
import './CarrouselCategories.scss';

const CategoriaCard = ({ data, id }) => {
  return (
    <div key={id} className="card-category">
      <div className="container-img">
        <img src={data.urlImagen} alt="Imagen de la Categoria" />
      </div>
      <div className="container-content">
        <h3>{data.titulo}</h3>
        <p>807.105 hoteles</p>
      </div>
    </div>
  );
};

export default CategoriaCard;
