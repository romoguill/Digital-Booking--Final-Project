import React from "react";
import "./CarrouselCategories.scss";

const CategoriaCard = ({ data, id }) => {
  return (
    <div key={id} className="card-category">
      <img src={data.urlImagen} alt="Imagen de la Categoria" />
      <h3>{data.titulo}</h3>
      <p>807.105 hoteles</p>
    </div>
  );
};

export default CategoriaCard;
