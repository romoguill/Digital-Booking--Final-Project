import './GalleryProduct.scss';

import product1 from '../../assets/Images/product-1.png';
import product2 from '../../assets/Images/product-2.png';
import product3 from '../../assets/Images/product-3.png';
import product4 from '../../assets/Images/product-4.png';
import product5 from '../../assets/Images/product-5.png';

import { register } from 'swiper/element/bundle';
import DesktopCarrousel from './Carrousel/DesktopCarrousel';
// register Swiper custom elements
register();

function GalleryProduct() {
  return (
    <>
      <section className="gallery container-main">
        <img className="main-picture" src={product1} />
        <img src={product2} />
        <img src={product3} />
        <img src={product4} />
        <img src={product5} />
      </section>
      <DesktopCarrousel />
    </>
  );
}

export default GalleryProduct;
