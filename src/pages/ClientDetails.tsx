import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
// import axiosInstance from "../api/axiosInstance";
import { useTranslation } from "react-i18next";
// import { Client } from "../constants/clients";
// import { clients } from "../constants/clients";
import { getClients } from "../constants/clients";

const ClientDetails = () => {
  SwiperCore.use([Autoplay, FreeMode]);
  useIntersectionObserver("show");
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clients = getClients();

  const { id } = useParams<{ id: string }>();
  const client = clients.find((c) => c.id === parseInt(id || "", 10));
  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <div className="container mx-auto xxxs:mt-10 md:mt-16 lg:mt-24 flex xxxs:flex-wrap customlg:flex-nowrap p-3 customlg:justify-around text-black dark:text-white">
        <div className="flex">
          <img src={client.image} alt="client" className="" />
        </div>
        <div className="flex flex-col w-[700px]">
          <div className="flex items-center justify-between sm:mt-5">
            <h2 className="font-bold xxxs:text-lg  sm:text-3xl md:text-3xl lg:text-5xl">
              {client.name}
            </h2>
            <Link
              to={client.link}
              className="mr-5 xxxs:text-base md:text-lg text-j-blue dark:text-j-yellow font-bold flex items-center gap-3"
            >
              {t("card_btn_2")} <i className="fas fa-arrow-right "></i>
            </Link>
          </div>
          <h3 className="font-semibold mt-5 xxxs:text-base md:text-lg">
            {t("goal")}:
          </h3>
          <p className="xxxs:text-base md:text-lg">{client.goal}</p>
          <h3 className="font-semibold xxxs:text-base md:text-lg">
            {t("solution")}:
          </h3>
          <p className="xxxs:text-base md:text-lg">{client.solution}</p>
          <h3 className="font-semibold xxxs:text-base md:text-lg">
            {t("result")}:
          </h3>
          <p className="xxxs:text-base md:text-lg">{client.solution}</p>
        </div>
      </div>

      {/* Comment */}
      {client.comment && (
        <div className="mt-24 p-8 flex flex-col bg-j-blue max-w-[800px] min-h-[300px] rounded-[45px] mx-auto">
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

      <div className="flex container mx-auto justify-center mt-24">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          allowTouchMove={true}
          speed={3000}
          className="xxxs:min-h-[500px] sm:min-h-[500px] lg:min-h-[600px] w-full max-w-full"
          breakpoints={{
            100: {
              slidesPerView: "auto",
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1228: {
              slidesPerView: 3,
              centeredSlides: false,
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
