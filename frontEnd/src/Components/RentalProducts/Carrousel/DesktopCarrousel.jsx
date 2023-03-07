import './DesktopCarrousel.scss';

import product1 from '../../../assets/Images/product-1.png';
import product2 from '../../../assets/Images/product-2.png';
import product3 from '../../../assets/Images/product-3.png';
import product4 from '../../../assets/Images/product-4.png';
import product5 from '../../../assets/Images/product-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

function DesktopCarrousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="carrousel-modal">
      <Swiper
        centeredSlides="true"
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={thumbsSwiper}
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
    </section>
  );
}

export default DesktopCarrousel;
