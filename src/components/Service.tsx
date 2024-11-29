const Service = () => {
  return (
    <>
      <section id="services" className="services mt-[100px]">
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold dark:text-j-yellow text-j-blue text-center hiddenYEl">
          Наши Услуги
        </h1>
        <div className="services-cards text-center mt-[100px] flex justify-around flex-wrap gap-[50px] space-x-6">
          {/* <!-- Service Card 1 --> */}
          <div className="service-card hiddenYEl ">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img src="/dev-icon.png" alt="dev-icon" className=" p-4 " />
            </div>
            <h2 className="mt-16 text-center font-bold text-[25px]">
              Веб-Разработка
            </h2>
            <div className="line my-2 mx-auto w-[35%] border-t-4 border-[#1C004B]"></div>
            <p className="text-sm">
              Создание адаптивных сайтов, интернет-магазинов, корпоративных
              порталов и лендингов, которые соответствуют современным
              требованиям и ожиданиям пользователей.
            </p>
          </div>

          {/* <!-- Service Card 2 --> */}
          <div className="service-card hiddenYEl">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img src="/design-icon.png" alt="design-icon" className=" p-4 " />
            </div>
            <h2 className="mt-16 text-center font-bold text-[25px]">
              Веб-Дизайн
            </h2>
            <div className="line my-2 mx-auto w-[35%] border-t-4 border-[#1C004B]"></div>
            <p className="text-sm">
              Разработка уникального визуального стиля, который отражает
              индивидуальность вашего бренда и привлекает внимание целевой
              аудитории.
            </p>
          </div>

          {/* <!-- Service Card 3 --> */}
          <div className="service-card hiddenYEl">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img src="/parse-icon.png" alt="parse-icon" className=" p-4 " />
            </div>
            <h2 className="mt-16 text-center font-bold text-[25px]">
              SEO и продвижение
            </h2>
            <div className="line my-2 mx-auto w-[35%] border-t-4 border-[#1C004B]"></div>
            <p className="text-sm">
              Оптимизация сайтов для поисковых систем, создание
              контент-стратегии и проведение маркетинговых кампаний,
              направленных на увеличение трафика и конверсии.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
