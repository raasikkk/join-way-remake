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
      <div className="p-8">
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
      </div>

      <div className="container mx-auto">
        {/* Swiper for Continuous Scrolling */}
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
          className="min-h-[600px]"
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

      <Contact />
      <Footer />
    </>
  );
};

export default ClientDetails;
