const Contact = () => {
  return (
    <>
      <section id="contacts" className="contacts mt-[200px] container mx-auto">
        <div className="contacts-content flex">
          <div className="contacts-descr md:w-[100%] lg:w-[100%] customlg:w-[50%]">
            <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-blue dark:text-j-yellow hiddenYEl">
              Есть вопросы или хотите заказать сайт?
            </h1>
            <h2 className="mt-[10px] xs:text-[17.34px] sm:text-[17.34px] md:text-[17.34px] lg:text-[24.34px] font-medium text-j-blue/75 dark:text-[#C6B55A] hiddenYEl">
              Мы всегда рады помочь! Напишите нам, и мы ответим на все ваши
              вопросы.
            </h2>
            <div className="contacts-img xxs:block sm:block md:block lg:block customlg:hidden hiddenYEl">
              <img src="/contacts-img.png" alt="contacts-img" />
            </div>
            <div className="contact-cards mt-[50px] flex flex-wrap justify-center customlg:justify-normal gap-[25px] hiddenYEl">
              <a
                href="https://www.instagram.com/joinway.24?igsh=eGM0d2Q3ZTR6c29k"
                className="contact-card"
              >
                <i className="fa-brands fa-instagram"></i>
                <h3>@joinway.24</h3>
              </a>
              <a href="#" className="contact-card">
                <i className="fa-brands fa-linkedin-in"></i>
                <h3>Join Way</h3>
              </a>

              <a
                href="https://www.tiktok.com/@joinway.shop?_t=8ohBCTJhCwH&_r=1"
                className="contact-card"
              >
                <i className="fa-brands fa-tiktok"></i>
                <h3>@joinway.shop</h3>
              </a>
              <a href="#" className="contact-card">
                <i className="fa-brands fa-telegram"></i>
                <h3>@join.way</h3>
              </a>
            </div>
          </div>
          <div className="contacts-img xxs:hidden sm:hidden md:hidden lg:hidden customlg:block hiddenYEl">
            <img src="/contacts-img.png" alt="contacts-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
