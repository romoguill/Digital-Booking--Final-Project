import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalf,
  faLocationDot,
  faWifi,
  faPersonSwimming,
} from '@fortawesome/free-solid-svg-icons';

import './CardRentalGrid.scss';

const Card = ({ id, imagen, img_name, categoria, titulo, ciudad, descripcion }) => {
  return (
    <div key={id} className="card-rental">
      <div className="card-rental__img">
        <img src={imagen} alt={img_name} className="depto-img" />
      </div>

      <div className="card-rental__info">
        <div className="card-rental__data">
          <div className="card-rental__head">
            <div className="card-rental__head--main">
              <div className="upper-title">
                <h3 className="rental-category text-gray-light">{categoria}</h3>
                <div className="rental-rating--stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalf} />
                </div>
              </div>
              <h2 className="rental-name text-dark">{titulo}</h2>
            </div>
            <div className="rental-rating--score">
              <p className="score--number">8</p>
              <p className="score--description text-dark">Muy bueno</p>
            </div>
          </div>

          <div className="card-rental__meta">
            <p className="rental-location text-dark">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span>{ciudad}</span>
              <span className="show-map">
                <a href="#">MOSTRAR EN EL MAPA</a>
              </span>
            </p>
            <div className="rental-amenities">
              <FontAwesomeIcon icon={faWifi} />
              <FontAwesomeIcon icon={faPersonSwimming} />
            </div>
          </div>

          <div className="card-rental__body">
            <p className="text-dark">
              {descripcion}
              <span className="more-description">
                <a>más...</a>
              </span>
            </p>
          </div>
        </div>

        <div className="card-rental__action">
          <button className="button--read-more button-primary button-primary--full">
            ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
