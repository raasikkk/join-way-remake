import { useTranslation } from "react-i18next";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();
  useIntersectionObserver("show");

  return (
    <>
      <section id="contacts" className="contacts mt-[200px] container mx-auto">
        <div className="contacts-content flex">
          <div className="contacts-descr md:w-[100%] lg:w-[100%] customlg:w-[50%]">
            <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-dark dark:text-j-yellow hiddenYEl">
              {t("contact_question")}
            </h1>
            <h2 className="mt-[10px] xs:text-[17.34px] sm:text-[17.34px] md:text-[17.34px] lg:text-[24.34px] font-medium text-j-dark/75 dark:text-[#C6B55A] hiddenYEl">
              {t("contact_offer")}
            </h2>
            <div className="contacts-img xxs:block sm:block md:block lg:block customlg:hidden hiddenYEl">
              <img src="/black-contact-us.png" alt="contacts-img" />
            </div>
            <div className="contact-cards mt-[50px] flex flex-wrap justify-center customlg:justify-normal gap-[25px] hiddenYEl">
              <Link
                to="https://www.instagram.com/joinway.24?igsh=eGM0d2Q3ZTR6c29k"
                className="contact-card"
              >
                <i className="fa-brands fa-instagram"></i>
                <h3>@joinway.24</h3>
              </Link>
              <Link
                to="https://www.linkedin.com/company/joinway/"
                className="contact-card"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                <h3>Join Way</h3>
              </Link>

              <Link
                to="https://www.tiktok.com/@joinway.shop?_t=8ohBCTJhCwH&_r=1"
                className="contact-card"
              >
                <i className="fa-brands fa-tiktok"></i>
                <h3>@joinway.shop</h3>
              </Link>
              <Link to="https://t.me/JoinWay_bot" className="contact-card">
                <i className="fa-brands fa-telegram"></i>
                <h3>@join.way</h3>
              </Link>
            </div>
          </div>
          <div className="contacts-img xxs:hidden sm:hidden md:hidden lg:hidden customlg:block hiddenYEl">
            <img src="/black-contact-us.png" alt="contacts-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
