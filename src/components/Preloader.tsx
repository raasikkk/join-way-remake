import { useState, useEffect } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    window.addEventListener("load", handleLoad);
  }, []);
  return (
    <div
      id="preloader"
      className={`preloader ${loaded ? "hide-preloader" : ""}`}
    >
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
