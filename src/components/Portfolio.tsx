// import { useState } from "react";
import Project from "./Project";
import { clients } from "../constants/clients";

const Portfolio = () => {
  // const slides = [
  //   { id: 1, content: "Slide 1", bgColor: "bg-red-500" },
  //   { id: 2, content: "Slide 2", bgColor: "bg-blue-500" },
  //   { id: 3, content: "Slide 3", bgColor: "bg-green-500" },
  //   { id: 4, content: "Slide 4", bgColor: "bg-yellow-500" },
  // ];

  return (
    <>
      <section
        id="portfolio"
        className="portfolio mt-[130px] container mx-auto"
      >
        <div className="container mx-auto">
          <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-blue dark:text-j-yellow hiddenYEl max-w-[527px]">
            Посмотрите Наше Портфолио
          </h1>
        </div>
        {/* <!-- Portfolio Cards --> */}
        {/* <div className="portfolio-cards mt-24 h-[650px]"></div> */}
        <div className="overflow-hidden mt-24 w-full h-full relative">
          <div className="flex w-[200%] gap-16 animate-scroll min-h-[700px]">
            {clients.map((client) => (
              <Project key={client.id} client={client} />
            ))}
            {clients.map((client) => (
              <Project key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
