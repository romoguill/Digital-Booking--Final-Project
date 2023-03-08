import product1 from '../../../assets/Images/product-1.png';
import product2 from '../../../assets/Images/product-2.png';
import product3 from '../../../assets/Images/product-3.png';
import product4 from '../../../assets/Images/product-4.png';
import product5 from '../../../assets/Images/product-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MobileCarrousel.scss';

function MobileCarrousel() {
  return (
    <section className="carrousel-mobile">
      <div className="carrousel-container">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'fraction',
          }}
          loop={true}
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          className="swiper-main"
        >
          <SwiperSlide>
            <img src={product1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default MobileCarrousel;
