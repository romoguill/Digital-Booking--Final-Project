import React from "react";
import "./CarrouselCategories.scss";

const CategoriaCard = ({ data, id }) => {
  return (
    <div key={id} className="card-category">
      <h3>{data.titulo}</h3>
      <img src={data.urlImagen} alt="Imagen de la Categoria" />
      <p>{data.descripcion}</p>
    </div>
  );
};

export default CategoriaCard;
