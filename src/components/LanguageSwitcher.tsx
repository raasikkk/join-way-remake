import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isSwitcherVisible, setIsSwitcherVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const hasSeenSwitcher = localStorage.getItem("hasSeenSwitcher");
    if (!hasSeenSwitcher) {
      setIsSwitcherVisible(true);
      localStorage.setItem("hasSeenSwitcher", "true");
    }
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsSwitcherVisible(false);
  };

  return (
    <>
      {isSwitcherVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
          }}
        />
      )}
      {/* Language switcher modal */}
      {isSwitcherVisible && (
        <div
          className="fixed top-[15%] left-[50%] bg-white p-5 rounded-lg shadow-lg text-center"
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        >
          <div style={{ marginTop: "20px" }}>
            <div className="flex gap-5">
              <button
                className="modal-btn"
                onClick={() => changeLanguage("kz")}
              >
                KAZ
              </button>
              <button
                className="modal-btn"
                onClick={() => changeLanguage("en")}
              >
                ENG
              </button>
              <button
                className="modal-btn"
                onClick={() => changeLanguage("ru")}
              >
                RUS
              </button>
            </div>
            <h3 className="mt-5 font-semibold text-md uppercase">
              {t("select_language")}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher;
