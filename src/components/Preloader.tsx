import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation(); // Detects route changes.

  useEffect(() => {
    // Show the preloader when route changes.
    setLoaded(false);

    const timer = setTimeout(() => setLoaded(true), 500); // Simulate loading time.
    return () => clearTimeout(timer); // Cleanup on unmount.
  }, [location]);

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
