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
      <div className="flex justify-center mt-24">
        <Swiper
          spaceBetween={16} // Space between slides
          slidesPerView={3} // Default to show 3 slides at a time
          autoplay={{
            delay: 0, // No delay, continuously scroll
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          loop={true} // Infinite scroll
          freeMode={true} // Enables smooth, continuous scrolling
          allowTouchMove={true} // Allow user to manually swipe
          speed={3000} // Smooth transition between slides
          className="xxxs:min-h-[500px] sm:min-h-[500px] lg:min-h-[600px] w-full max-w-full" // Full width to stretch and control centering
          breakpoints={{
            100: {
              slidesPerView: "auto", // Allow slide to take up only the necessary width
              centeredSlides: true, // Center the slides on mobile
            },
            640: {
              slidesPerView: 2, // Auto slide size on medium screens
              centeredSlides: true, // Center the slides on medium screens
            },
            1228: {
              slidesPerView: 3, // 3 slides on larger screens
              centeredSlides: false, // No centering on larger screens
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
