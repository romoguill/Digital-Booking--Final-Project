import './Hero.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="hero__products">
      <div className="hero__products__title">
        <div className="container-main">
          <div className="hero__products__title__detail">
            <h2>HOTEL</h2>
            <h1>Hermitage Hotel</h1>
          </div>
          <FontAwesomeIcon className="go-back-icon" icon={faChevronLeft} />
        </div>
      </div>
      <div className="hero__products__banner">
        <div className="container-main"></div>
      </div>
      <div className="hero__products__actions">
        <div className="container-main"></div>
      </div>
    </div>
  );
}

export default Hero;
