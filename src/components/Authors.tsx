import { useTranslation } from "react-i18next";

const Authors = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="authors mt-[100px] container mx-auto">
        {/* <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-blue dark:text-j-yellow hiddenYEl">
          Authors
        </h1> */}
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-dark dark:text-j-yellow hiddenYEl">
          {t("our_team")}
        </h1>
        <div className="mt-20 authors-cards gap-[50px] grid md:grid-cols-2 lg:grid-cols-4">
          <div className="author-card shadow-lg shadow-j-dark/35 hiddenYEl">
            <img
              src="/dimash (1).png"
              className="w-[75%] mx-auto"
              alt="author"
            />
            <h2 className="font-bold text-[19px] mt-[16px]">{t("author_1")}</h2>
            <p className="pb-[55px] font-medium text-[15px]">
              {t("author_role_1")}
            </p>
          </div>
          <div className="author-card shadow-lg shadow-j-dark/35 hiddenYEl">
            <img
              src="/rasul (1).png"
              className="w-[75%] mx-auto"
              alt="author"
            />
            <h2 className="font-bold text-[19px] mt-[16px]">{t("author_2")}</h2>
            <p className="pb-[55px] font-medium text-[15px]">
              {t("author_role_2")}
            </p>
          </div>
          <div className="author-card shadow-lg shadow-j-dark/35 hiddenYEl">
            <img
              src="/issatay (1).png"
              className="w-[75%] mx-auto"
              alt="author"
            />
            <h2 className="font-bold text-[19px] mt-[16px]">{t("author_3")}</h2>
            <p className="pb-[55px] font-medium text-[15px]">
              {t("author_role_3")}
            </p>
          </div>
          <div className="author-card shadow-lg shadow-j-dark/35 hiddenYEl">
            <img src="/darzhan.png" className="w-[75%] mx-auto" alt="author" />
            <h2 className="font-bold text-[19px] mt-[16px]">{t("author_4")}</h2>
            <p className="pb-[55px] font-medium text-[15px]">
              {t("author_role_4")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authors;
