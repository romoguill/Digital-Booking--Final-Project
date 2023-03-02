import './Hero.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faLocationDot,
  faStar,
  faShareNodes,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero__products">
      <div className="hero__products__title">
        <div className="container-main">
          <div className="hero__products__title__detail">
            <h2>HOTEL</h2>
            <h1>Hermitage Hotel</h1>
          </div>
          <Link to="/">
            <FontAwesomeIcon className="go-back-icon" icon={faChevronLeft} />
          </Link>
        </div>
      </div>
      <div className="hero__products__banner">
        <div className="container-main">
          <FontAwesomeIcon icon={faLocationDot} />
          <div className="location">
            <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
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
          <FontAwesomeIcon icon={faShareNodes} />
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
