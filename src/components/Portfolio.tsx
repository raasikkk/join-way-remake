// import { useState, useEffect } from "react";
// import axiosInstance from "../api/axiosInstance";
import Project from "./Project";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { FreeMode } from "swiper/modules";
// import { clients } from "../constants/clients";
import { useClients } from "../constants/clients";

const Portfolio = () => {
  SwiperCore.use([Autoplay, FreeMode]);
  const { t } = useTranslation();
  const clients = useClients();
  // Django data
  // const [clients, setClients] = useState([]);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchClients = async () => {
  //     try {
  //       const response = await axiosInstance.get("clients/");
  //       setClients(response.data);
  //     } catch (err) {
  //       setError("Failed to fetch clients");
  //       console.error(err);
  //     }
  //   };

  //   fetchClients();
  // }, []);

  return (
    <section
      id="portfolio"
      className="portfolio mt-[130px] container mx-auto overflow-hidden "
    >
      <div className="container mx-auto">
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-dark dark:text-j-yellow hiddenYEl max-w-[527px]">
          {t("portfolio_header")}
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
