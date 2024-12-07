import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="services" className="services mt-[100px]">
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold dark:text-j-yellow text-j-dark text-center hiddenYEl">
          {t("service_header")}
        </h1>
        <div className="services-cards text-center mt-[100px] flex justify-around flex-wrap gap-[50px] space-x-6">
          {/* <!-- Service Card 1 --> */}
          <div className="service-card hiddenYEl ">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img src="/dev-icon-grey.png" alt="dev-icon" className=" p-4 " />
            </div>
            <h2 className="mt-16 text-center font-bold text-[25px]">
              {t("service_1")}
            </h2>
            <div className="line my-2 mx-auto w-[35%] border-t-4 border-[#353535]"></div>
            <p className="text-sm">{t("service_1_descr")}</p>
          </div>

          {/* <!-- Service Card 2 --> */}
          <div className="service-card hiddenYEl">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src="/design-icon-grey.png"
                alt="design-icon"
                className=" p-4 "
              />
            </div>
            <h2 className="mt-16 text-center font-bold text-[25px]">
              {t("service_2")}
            </h2>
            <div className="line my-2 mx-auto w-[35%] border-t-4 border-[#353535]"></div>
            <p className="text-sm">{t("service_2_descr")}</p>
          </div>

          {/* <!-- Service Card 3 --> */}
          <div className="service-card hiddenYEl">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src="/parse-icon-grey.png"
                alt="parse-icon"
                className=" p-4 "
              />
            </div>
            <h2 className="mt-16 text-center font-bold text-[25px]">
              {t("service_3")}
            </h2>
            <div className="line my-2 mx-auto w-[35%] border-t-4 border-[#353535]"></div>
            <p className="text-sm">{t("service_3_descr")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
