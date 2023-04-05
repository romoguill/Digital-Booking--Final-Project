import "./Hero.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { BsShare } from "react-icons/bs";
import BannerProductTitle from "../BannerProductTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero({ producto, imagenes }) {
  const params = useParams();
  const [frase, setFrase] = useState();
  const [promedio, setPromedio] = useState();

  const promedioProducto = (reseñas) => {
    if (reseñas.length == 0) {
      setFrase("Sin Puntuación");
      setPromedio("-");
      return;
    }

    let suma = 0;

    reseñas.forEach((reseña) => {
      suma += reseña.puntuacion;
    });

    const prom = suma / reseñas.length;
    setPromedio(prom);
    console.log(reseñas.length);

    if (prom >= 9.5) {
      setFrase("Excelente");
    } else if (prom >= 8.0 && prom < 9.5) {
      setFrase("Muy bueno");
    } else if (prom < 8.0 && prom >= 6.0) {
      setFrase("Bueno");
    } else {
      setFrase("Aceptable");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      axios(
        `${import.meta.env.VITE_BASE_API_URL}/puntuaciones/idProducto=${
          params.id
        }`
      )
        .then((res) => {
          promedioProducto(res.data);
        })
        .catch((res) => {
          if (res.response.status == 404) {
            console.log(res);
            setFrase("Sin puntuación");
            setPromedio(null);
          }
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <BannerProductTitle
        titulo={producto.titulo}
        categoria={producto.categoria?.titulo}
      />
      <div className="hero__products">
        <div className="hero__products__banner">
          <div className="container-main">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="location">
              <p>{producto.ciudad && producto.ciudad.nombre}, Argentina</p>
              <p>A 940 m del centro </p>
            </div>
            <div className="rating">
              <div className="rating__left">
                <p className="rating-description">{frase}</p>
                <p className="rating-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </p>
              </div>
              <div className="rating__right">{promedio}</div>
            </div>
          </div>
        </div>
        <div className="hero__products__actions">
          <div className="container-main">
            <BsShare className="icon icon-share" />
            <FontAwesomeIcon className="icon icon-heart" icon={faHeart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
