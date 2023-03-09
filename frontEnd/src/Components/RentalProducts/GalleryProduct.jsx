import './GalleryProduct.scss';
import DesktopCarrousel from './Carrousel/DesktopCarrousel';
import { useEffect, useState } from 'react';
import useWindowSize from '../../Hooks/useWindowSize';
import MobileCarrousel from './Carrousel/MobileCarrousel';

function GalleryProduct({ producto, imagenes }) {
  const [carrouselVisible, setCarrouselVisible] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    // TODO : traer la variable del bp Tablet a React
    windowSize.width <= 768 ? setIsMobile(true) : setIsMobile(false);
  }, [windowSize]);

  const handleCloseCarrousel = () => {
    setCarrouselVisible(false);
  };

  const handleOpenCarrousel = () => {
    setCarrouselVisible(true);
  };

  return (
    <>
      {!isMobile ? (
        <>
          <section className="gallery container-main">
            {imagenes.map((item, i) => {
            return (
              <div className="item">
                <img src={item.url} className={i === 0? 'main-picture' : ''} />
              </div>
            );
          })}
            <button className="open-carrousel" onClick={handleOpenCarrousel}>
              Ver más
            </button>
          </section>
          {carrouselVisible && (
            <DesktopCarrousel handleCloseCarrousel={handleCloseCarrousel} producto={producto} imagenes={imagenes} />
          )}
        </>
      ) : (
        <>
          <MobileCarrousel producto={producto} imagenes={imagenes} />
        </>
      )}
    </>
  );
}

export default GalleryProduct;
