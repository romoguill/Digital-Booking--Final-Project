import product1 from '../../../assets/Images/product-1.png';
import product2 from '../../../assets/Images/product-2.png';
import product3 from '../../../assets/Images/product-3.png';
import product4 from '../../../assets/Images/product-4.png';
import product5 from '../../../assets/Images/product-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import './DesktopCarrousel.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

function DesktopCarrousel({ handleCloseCarrousel }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="carrousel-modal">
      <div className="carrousel-container">
        <div className="carrousel">
          <FontAwesomeIcon
            icon={faXmark}
            className="close-carrousel"
            onClick={handleCloseCarrousel}
          />
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            loop={true}
            navigation={true}
            spaceBetween={10}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
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

          <div className="wrapper-thumbs">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper-thumbs"
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
        </div>
      </div>
    </section>
  );
}

export default DesktopCarrousel;
