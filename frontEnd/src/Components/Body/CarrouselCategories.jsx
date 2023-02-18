import { useEffect, useState } from "react";
import "./CarrouselCategories.scss";
import CategoriaCard from "./CategoriaCard";

function CarrouselCategories() {
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const options = { method: "GET" };

    fetch("http://localhost:8080/categoria/todas", options)
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((response) => setCategorias(response))
      .catch((e) => {
        setError("No se pudo recuperar la informacion");
        console.error(e);
      });
  }, []);

  return (
    <section className="section__categories">
      <h2>Buscar por tipo de alojamiento</h2>
      <div className="container-main">
        {!error ? (
          categorias
            .slice(0, 4)
            .map((categoria) => (
              <CategoriaCard key={categoria.id} data={categoria} />
            ))
        ) : (
          <p>{error}</p>
        )}
      </div>
    </section>
  );
}

export default CarrouselCategories;
