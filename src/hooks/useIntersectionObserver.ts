import { useEffect } from "react";

const useIntersectionObserver = (classNameToAdd: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classNameToAdd);
        } else {
          entry.target.classList.remove(classNameToAdd);
        }
      });
    });

    const hiddenElementsY = document.querySelectorAll(".hiddenYEl");
    const hiddenElementsX = document.querySelectorAll(".hiddenXEl");

    [...hiddenElementsY, ...hiddenElementsX].forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect(); // Cleanup on unmount
  }, [classNameToAdd]);
};

export default useIntersectionObserver;
