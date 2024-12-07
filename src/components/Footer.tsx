import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <footer className="mt-[50px] bg-j-dark min-h-[350px]">
      <div className="container mx-auto">
        <div className="footer-main max-w-[900px] mx-auto">
          <img
            src="/logo-white.png"
            alt="logo"
            className="logo xxs:mx-0 xs:mx-0 sm:mx-0 md:mx-auto"
          />
          <ul className=" mt-[11px] max-w-[600px] xxs:mr-auto xs:mr-auto sm:mr-auto md:mx-auto text-white text-[18px] font-medium flex xxs:flex-col xs:flex-col sm:flex-col gap-[24px] md:flex-row justify-between">
            <li>
              <Link
                to="#"
                className="text-[25px] font-bold border-white xs:block sm:block md:hidden"
              >
                Навигация
              </Link>
            </li>
            <li>
              <Link to="/#hero" className="hover:border-b-2 border-white">
                {t("nav_link_1")}
              </Link>
            </li>
            <li>
              <Link to="/#about" className="hover:border-b-2 border-white">
                {t("nav_link_2")}
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className="hover:border-b-2 border-white">
                {t("nav_link_3")}
              </Link>
            </li>
            <li>
              <a href="/#services" className="hover:border-b-2 border-white">
                {t("nav_link_4")}
              </a>
            </li>
            <li>
              <a href="/#contacts" className="hover:border-b-2 border-white">
                {t("nav_link_5")}
              </a>
            </li>
          </ul>
          <div className="social-icons mt-[35px] text-[30px] text-white flex justify-center xs:gap-[20px] md:gap-[25px]">
            <Link to="https://www.instagram.com/joinway.24?igsh=eGM0d2Q3ZTR6c29k">
              <i className="fa-brands fa-instagram border-2 p-3 px-3.5 rounded-full hover:bg-j-blue transition"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/joinway/">
              <i className="fa-brands fa-linkedin-in border-2 p-3 px-3.5 rounded-full hover:bg-j-blue transition"></i>
            </Link>

            <Link to="https://t.me/JoinWay_bot">
              <i className="fa-brands fa-telegram border-2 p-3 rounded-full hover:bg-j-blue transition"></i>
            </Link>
            <Link to="https://www.tiktok.com/@joinway.shop?_t=8ohBCTJhCwH&_r=1">
              <i className="fa-brands fa-tiktok border-2 p-3 px-3.5 rounded-full hover:bg-j-blue transition"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[50px] mt-[50px] py-[15px] text-center text-white bg-j-dark text-[15px] font-semibold">
        &copy; <span id="footerYear"></span> Join-Way. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
