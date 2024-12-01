import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="about" className="about mt-[200px] container mx-auto">
        <div className="about-content xxs:p-[25px] sm:p-[35px] md:p-[40px] lg:p-[45px] w-full bg-j-blue rounded-[39px] ">
          <div className="about-main flex">
            <div className="about-descr md:w-[100%] lg:w-[100%] customlg:w-[50%]">
              <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-yellow hiddenYEl">
                {t("about_header")}
              </h1>
              <div className="about-img sm:block md:block lg:block customlg:hidden hiddenYEl">
                <img src="/about-img.png" alt="about-img" />
              </div>
              <div className="paragraphs mt-[27px] text-[16px] text-white gap-[37px]">
                <p className="mb-[27px] hiddenYEl">{t("about_descr_1")}</p>
                <p className="mb-[27px] hiddenYEl">{t("about_descr_2")}</p>
                <p className="mb-[27px] hiddenYEl">{t("about_descr_3")}</p>
              </div>
            </div>
            <div className="about-img xxs:hidden sm:hidden md:hidden lg:hidden customlg:block float-right hiddenYEl">
              <img src="/about-img.png" alt="about-img" />
            </div>
          </div>
          {/* <!-- Experience --> */}
          <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-yellow hiddenYEl">
            {t("about_why")}
          </h1>
          <div className="exp-cards mt-[23px] gap-[25px] grid md:grid-cols-2 lg:grid-cols-4">
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">{t("about_item_1")}</h2>
              <h3 className="font-light">{t("about_item_descr_1")}</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">{t("about_item_2")}</h2>
              <h3 className="font-light">{t("about_item_descr_2")}</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">{t("about_item_3")}</h2>
              <h3 className="font-light">{t("about_item_descr_3")}</h3>
              <p className="font-light">100%</p>
              <div className="white-line h-[5px] w-full bg-[#340089] rounded-[39px]">
                <div className="blue-line h-[5px] w-[100%] bg-[#340089 rounded-[39px]"></div>
              </div>
            </div>
            <div className="exp-card bg-[#450ABA] shadow-lg hover:-translate-y-2 hover:transition text-white rounded-[39px] p-[12px] px-[18px] pb-[20px] hiddenXEl ">
              <h2 className="font-semibold">{t("about_item_4")}</h2>
              <h3 className="font-light">{t("about_item_descr_4")}</h3>
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
