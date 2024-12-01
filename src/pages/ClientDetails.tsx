import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clients } from "../constants/clients";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Preloader from "../components/Preloader";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { FreeMode } from "swiper/modules";

const ClientDetails = () => {
  SwiperCore.use([Autoplay, FreeMode]);

  useIntersectionObserver("show");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const client = clients.find((c) => c.id === parseInt(id || "", 10));

  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <>
      <Preloader />
      <Navbar />

      <div className="container mx-auto xxxs:mt-10 md:mt-16 lg:mt-24 flex xxxs:flex-wrap customlg:flex-nowrap p-3 gap-14">
        <div className="flex">
          <img src={client.image} alt="client" />
        </div>
        <div className="flex flex-col w-[700px]">
          <h2 className="font-bold xxxs:text-lg sm:text-xl md:text-3xl lg:text-5xl">
            {client.name}
          </h2>
          <h3 className="font-semibold xxxs:text-base md:text-lg">Цель:</h3>
          <p className="xxxs:text-base md:text-lg">{client.goal}</p>
          <h3 className="font-semibold xxxs:text-base md:text-lg">Решение:</h3>
          <p className="xxxs:text-base md:text-lg">{client.solution}</p>
          <h3 className="font-semibold xxxs:text-base md:text-lg">
            Результат:
          </h3>
          <p className="xxxs:text-base md:text-lg">{client.result}</p>
        </div>
      </div>

      {/* Comment */}
      {client.comment && (
        <div className="mt-24 p-8 flex flex-col bg-black max-w-[800px] min-h-[300px] rounded-[45px] mx-auto">
          <div className="flex flex-wrap mt-5 items-center justify-between">
            <div className="flex gap-3">
              <img src="/user-icon.png" alt="comment-icon" />
              <div className="flex flex-col">
                <h3 className="text-white text-lg">{client.name}</h3>
                <h3 className="text-white">user212454</h3>
              </div>
            </div>
            <img src="/отзыв.png" />
          </div>
          <p className="text-white mt-5">{client.comment}</p>
        </div>
      )}

      {/* <div className="p-8">
        <h1 className="text-4xl font-bold">{client.name}</h1>
        <img src={client.image} alt={client.name} className="my-4 w-full" />
        <p className="text-xl">{client.description}</p>
        <p className="text-xl mt-4">
          <strong>Goal:</strong> {client.goal}
        </p>
        <p className="text-xl mt-4">
          <strong>Solution:</strong> {client.solution}
        </p>
        <p className="text-xl mt-4">
          <strong>Result:</strong> {client.result}
        </p>
        {client.comment && (
          <p className="text-xl mt-4">
            <strong>Comment:</strong> {client.comment}
          </p>
        )}
      </div> */}

      <div className="flex container mx-auto justify-center mt-24">
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

      <Contact />
      <Footer />
    </>
  );
};

export default ClientDetails;
