import Project from "./Project";
import { clients } from "../constants/clients";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { FreeMode } from "swiper/modules";

const Portfolio = () => {
  SwiperCore.use([Autoplay, FreeMode]);

  return (
    <section
      id="portfolio"
      className="portfolio mt-[130px] container mx-auto overflow-hidden "
    >
      <div className="container mx-auto">
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-blue dark:text-j-yellow hiddenYEl max-w-[527px]">
          Посмотрите Наше Портфолио
        </h1>
      </div>

      {/* Swiper */}
      <div className="flex items-center justify-center mx-auto">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true} // Infinite scroll
          freeMode={true} // Enables smooth, continuous scrolling
          allowTouchMove={true} // Allow user to manually swipe
          speed={3000} // Smooth transition between slides (adjust speed as needed)
          className="min-h-[600px] mt-24"
          breakpoints={{
            100: {
              slidesPerView: 1, // 1 slide on smaller screens
            },
            640: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            1228: {
              slidesPerView: 3, // 3 slides on large screens
            },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <Project client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
