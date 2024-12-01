import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero mt-[100px] container mx-auto">
        <div className="hero-content max-w-[970px] h-auto mx-auto">
          <h1 className="xxs:text-[25.91px] sm:text-[35.91px] md:text-[45.91px] lg:text-[55.91px] font-bold text-center dark:text-white  hiddenYEl">
            <span className="text-j-yellow">{t("hero_project")}</span>
            {t("hero_descr")}
          </h1>
          <div className="buttons flex justify-center gap-[35px] mt-[39px]">
            <Link
              to="https://t.me/JoinWay_bot"
              target="_blank"
              className="text-center pt-[15px] w-[205px] h-[55px] bg-j-yellow shadow-lg shadow-j-yellow/35 hover:-translate-y-1 hover:transition text-j-blue rounded-[39px] hiddenYEl "
            >
              {t("hero_order")}
            </Link>
            <Link
              to="#portfolio"
              className="text-center pt-[15px] w-[205px] h-[55px] bg-j-blue shadow-lg shadow-j-blue/35 hover:-translate-y-1 hover:transition text-j-yellow rounded-[39px] hiddenYEl "
            >
              {t("nav_link_3")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
