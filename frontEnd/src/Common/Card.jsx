import React from "react";
import "./CardStyles.css";
import img_depto_1 from "../assets/Images/hotel-img-1.png";
import favorite from "../assets/Images/favorite.png";
import star from "../assets/Images/star.png";
import swim from "../assets/Images/icon-hombre-nadando.png";
import wifi from "../assets/Images/icon-wifi-2.png";
import ubication from "../assets/Images/ubication.png";

const Card = ({id, img, category, title, location, description}) => {
  return (
    <div className="card-container">
      <div className="card">
        {/* <div className='card-image'></div> */}
        <div>
          <img src={img} alt="depto" className="depto-img" />
          {/* <img src={favorite} alt="fav" className='fav-icon'/> */}
        </div>

        <div className="card-info">
          <div className="head">
            <div>
              <p className="deptoStars">
                {category}
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
              </p>
              <p className="deptoName">{title}</p>
              <p className="location">{location}</p>
            </div>

            <div className="head-score">
              <div className="deptoScore">8</div>
              <p className="deptoOpinion">Muy bueno</p>
            </div>
          </div>

          <div className="middle">
            <div className="depto-ubication">
              <p><img src={ubication} alt="ubication" className="ubication-img"/>
                A 940 m del centro
                <span className="show-map"> MOSTRAR EN EL MAPA</span>
              </p>
            </div>

            <div className="depto-includes">
              <img src={wifi} alt="wifi" />
              <img src={swim} alt="swim" />
            </div>
          </div>

          <div className="bottom">
            <div className="depto-description">
                <p>
                    {description}<span className="more-description"> más...</span>
                </p>
            </div>

            <div className="show-more">
                <button>Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
