import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero mt-[100px] xs:min-h-[350px] md:min-h-[500px] container mx-auto">
        <div className="hero-content max-w-[970px] h-auto mx-auto">
          <h1 className="xxs:text-[25.91px] sm:text-[35.91px] md:text-[45.91px] lg:text-[55.91px] font-bold text-center dark:text-white xs:min-h-[150px] md:min-h-[230px]">
            <span className="text-j-yellow">{t("hero_project")}</span>
            <ReactTyped
              strings={[`${t("hero_descr")}`]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              showCursor={true}
              loop={false}
            />
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
