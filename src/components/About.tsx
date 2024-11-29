const About = () => {
  return (
    <>
      <section id="about" className="about mt-[200px] container mx-auto">
        <div className="about-content xxs:p-[25px] sm:p-[35px] md:p-[40px] lg:p-[45px] w-full bg-j-blue rounded-[39px] ">
          <div className="about-main flex">
            <div className="about-descr md:w-[100%] lg:w-[100%] customlg:w-[50%]">
              <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-yellow hiddenYEl">
                Немного о нашей команде
              </h1>
              <div className="about-img sm:block md:block lg:block customlg:hidden hiddenYEl">
                <img src="/about-img.png" alt="about-img" />
              </div>
              <div className="paragraphs mt-[27px] text-[16px] text-white gap-[37px]">
                <p className="mb-[27px] hiddenYEl">
                  Мы – команда опытных профессионалов, специализирующихся на
                  веб-разработке и дизайне, и предлагаем широкий спектр услуг,
                  направленных на создание и продвижение высокоэффективных и
                  адаптивных веб-решений.{" "}
                </p>
                <p className="mb-[27px] hiddenYEl">
                  Наша основная миссия – помочь вашему бизнесу достичь новых
                  высот, используя самые современные технологии, креативные
                  подходы и проверенные методы.
                </p>
                <p className="mb-[27px] hiddenYEl">
                  С годами мы накопили значительный опыт в индустрии, который
                  позволяет нам решать самые сложные задачи и создавать
                  продукты, полностью соответствующие высоким стандартам
                  качества. Каждый проект для нас уникален, и мы всегда
                  стремимся к тому, чтобы он не только соответствовал ожиданиям
                  наших клиентов, но и превосходил их.
                </p>
              </div>
            </div>
            <div className="about-img xxs:hidden sm:hidden md:hidden lg:hidden customlg:block float-right hiddenYEl">
              <img src="/about-img.png" alt="about-img" />
            </div>
          </div>
          {/* <!-- Experience --> */}
          <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-yellow hiddenYEl">
            Почему выбирают нас:
          </h1>
          <div className="exp-cards mt-[23px] gap-[25px] grid md:grid-cols-2 lg:grid-cols-4">
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">Индивидуальный подход</h2>
              <h3 className="font-light">Учитываем особенности.</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">Комплексный подход</h2>
              <h3 className="font-light">Полный цикл.</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">Технологическая экспертиза</h2>
              <h3 className="font-light">Современные технологии.</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">Прозрачность и сотрудничество</h2>
              <h3 className="font-light">Открытое взамодействие.</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
