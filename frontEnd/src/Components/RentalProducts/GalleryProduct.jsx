import './GalleryProduct.scss';

import product1 from '../../assets/Images/product-1.png';
import product2 from '../../assets/Images/product-2.png';
import product3 from '../../assets/Images/product-3.png';
import product4 from '../../assets/Images/product-4.png';
import product5 from '../../assets/Images/product-5.png';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function GalleryProduct() {
  return (
    <section className="gallery container-main">
      <img className="main-picture" src={product1} />
      <img src={product2} />
      <img src={product3} />
      <img src={product4} />
      <img src={product5} />

      <div class="swiper hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </section>
  );
}

export default GalleryProduct;
