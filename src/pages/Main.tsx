import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Authors from "../components/Authors";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import Timer from "../components/Timer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import LanguageSwitcher from "../components/LanguageSwitcher";
const Main = () => {
  useIntersectionObserver("show");

  return (
    <>
      <LanguageSwitcher />
      <Preloader />
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Authors />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="services">
        <Service />
      </div>
      <Timer />
      <div id="contacts">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Main;
