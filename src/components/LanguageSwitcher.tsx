import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isSwitcherVisible, setIsSwitcherVisible] = useState(false);
  const { t } = useTranslation();
  const modalRef = useRef(null); // Create a ref for the modal

  useEffect(() => {
    const hasSeenSwitcher = localStorage.getItem("hasSeenSwitcher");
    if (!hasSeenSwitcher) {
      setIsSwitcherVisible(true);
      localStorage.setItem("hasSeenSwitcher", "true");
    }

    // Event listener for clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsSwitcherVisible(false); // Close the modal if click is outside
      }
    };

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsSwitcherVisible(false);
  };

  return (
    <>
      <button
        className="text-[40px] text-j-blue dark:text-j-yellow"
        onClick={() => setIsSwitcherVisible(!isSwitcherVisible)}
      >
        <i className="fas fa-language"></i>
      </button>

      {isSwitcherVisible && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-50 transition"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(8px)",
            }}
          />
          <div
            ref={modalRef} // Attach the ref here
            className="fixed top-[15%] left-[50%] bg-white p-5 rounded-lg shadow-lg text-center"
            style={{
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
            }}
          >
            <div style={{ marginTop: "20px" }}>
              <div className="flex gap-5">
                <button
                  className="language-button kz-btn"
                  onClick={() => changeLanguage("kz")}
                >
                  KAZ
                </button>
                <button
                  className="language-button en-btn"
                  onClick={() => changeLanguage("en")}
                >
                  ENG
                </button>
                <button
                  className="language-button ru-btn"
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
        </>
      )}
    </>
  );
};

export default LanguageSwitcher;
