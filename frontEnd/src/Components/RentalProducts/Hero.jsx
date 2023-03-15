import './Hero.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { BsShare } from 'react-icons/bs';
import BannerProductTitle from '../BannerProductTitle';

function Hero({ producto, imagenes }) {
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
                <p className="rating-description">Muy bueno</p>
                <p className="rating-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </p>
              </div>
              <div className="rating__right">8</div>
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
