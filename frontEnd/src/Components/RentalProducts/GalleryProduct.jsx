import './GalleryProduct.scss';
import variables from '../../sassStyles/abstracts/_variables.scss';

import product1 from '../../assets/Images/product-1.png';
import product2 from '../../assets/Images/product-2.png';
import product3 from '../../assets/Images/product-3.png';
import product4 from '../../assets/Images/product-4.png';
import product5 from '../../assets/Images/product-5.png';

import DesktopCarrousel from './Carrousel/DesktopCarrousel';
import { useEffect, useState } from 'react';

import useWindowSize from '../../Hooks/useWindowSize';
import { useAsyncError } from 'react-router';
import MobileCarrousel from './Carrousel/MobileCarrousel';

function GalleryProduct() {
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
            <img className="main-picture" src={product1} />
            <img src={product2} />
            <img src={product3} />
            <img src={product4} />
            <img src={product5} />

            <button className="open-carrousel" onClick={handleOpenCarrousel}>
              Ver más
            </button>
          </section>
          {carrouselVisible && (
            <DesktopCarrousel handleCloseCarrousel={handleCloseCarrousel} />
          )}
        </>
      ) : (
        <>
          <MobileCarrousel />
        </>
      )}
    </>
  );
}

export default GalleryProduct;
