import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  // Handle Navbar
  const [isOpen, setIsOpen] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height || 0;
    if (linksContainerRef.current) {
      linksContainerRef.current.style.height = isOpen
        ? `${linksHeight}px`
        : "0px";
    }
  }, [isOpen]);
  // Handle Switch Mode
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const currentMode = localStorage.getItem("theme");
  //   if (currentMode === "dark") {
  //     document.documentElement.classList.add("dark");
  //     setIsDarkMode(true);
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => {
  //     const newMode = !prevMode;
  //     if (newMode) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //     return newMode;
  //   });
  // };

  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <nav id="nav" className="mt-7 lg:flex items-center ">
        <img
          // src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
          src="/logo-grey.png"
          alt="logo"
          className="logo hover:-translate-y-1 transition xxxs:hidden lg:block"
        />
        <div className="nav-center ">
          {/* Nav Header  */}
          <div className="nav-header">
            <img
              // src={isDarkMode ? "/logo-dark.png" : "/logo-grey.png"}
              src="/logo-grey.png"
              alt="logo"
              className="logo w-16 h-12 hover:-translate-y-1 transition lg:hidden"
            />
            <div className="buttons xxs:flex xs:flex sm:flex md:flex items-center lg:hidden gap-6">
              {/* <!-- Dark Mode Switcher --> */}
              <LanguageSwitcher />

              {/* <button
                onClick={toggleDarkMode}
                className={`switch-btn  ${
                  isDarkMode ? "slide" : ""
                }  relative border-none p-1 flex justify-around w-[110px] h-[50px] rounded-full`}
              >
                <span className="switch-icons text-j-yellow dark:text-white text-[24px]">
                  <i className="fa-regular fa-sun"></i>
                </span>
                <span className="switch-icons text-gray-500 dark:text-j-yellow text-[24px] ">
                  <i className="fa-regular fa-moon"></i>
                </span>
                <span className={`switch`}></span>
              </button> */}
              {/* <!-- Burger Menu --> */}
              <button
                onClick={toggleNav}
                className="nav-toggle text-[1.5rem] cursor-pointer text-j-blue dark:text-white lg:hidden"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
          {/* <!-- Links --> */}
          <div ref={linksContainerRef} className="links-container">
            <ul
              ref={linksRef}
              className="links text-j-dark dark:text-white transition-none"
            >
              <li>
                <Link
                  to="/"
                  className="scroll-link hover:border-b-2 border-b-2 border-j-blue dark:border-white"
                >
                  {t("nav_link_1")}
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  className="scroll-link hover:border-b-2 border-j-blue dark:border-white"
                >
                  {t("nav_link_2")}
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  className="scroll-link hover:border-b-2 border-j-blue dark:border-white"
                >
                  {t("nav_link_3")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="scroll-link hover:border-b-2 border-j-blue dark:border-white"
                >
                  {t("nav_link_4")}
                </a>
              </li>
              <li>
                <a
                  href="/#contacts"
                  className="scroll-link hover:border-b-2 border-j-blue dark:border-white"
                >
                  {t("nav_link_5")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons xxxs:hidden xxs:hidden xs:hidden sm:hidden md:hidden lg:flex items-center gap-[3rem]">
          {/* <!-- Dark Mode Switcher --> */}
          <LanguageSwitcher />

          {/* <button
            onClick={toggleDarkMode}
            className={`switch-btn  ${
              isDarkMode ? "slide" : ""
            }  relative border-none p-1 flex justify-around w-[110px] h-[50px] rounded-full`}
          >
            <span className="switch-icons text-j-yellow dark:text-white text-[24px]">
              <i className="fa-regular fa-sun"></i>
            </span>
            <span className="switch-icons text-gray-500 dark:text-j-yellow text-[24px] ">
              <i className="fa-regular fa-moon"></i>
            </span>
            <span className="switch "></span>
          </button> */}
          {/* <!-- Burger Menu --> */}
          <button
            onClick={toggleNav}
            className="nav-toggle text-[1.5rem] cursor-pointer text-j-dark dark:text-white lg:hidden"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
