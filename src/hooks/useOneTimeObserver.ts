import { useEffect } from "react";

const useOneTimeAnimationObserver = (classNameToAdd: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classNameToAdd);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hiddenOneTime");

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [classNameToAdd]);
};

export default useOneTimeAnimationObserver;
