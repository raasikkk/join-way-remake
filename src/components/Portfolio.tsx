import Project from "./Project";
import { clients } from "../constants/clients";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="portfolio mt-[130px] container mx-auto overflow-hidden"
      >
        <div className="container mx-auto">
          <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-blue dark:text-j-yellow hiddenYEl max-w-[527px]">
            Посмотрите Наше Портфолио
          </h1>
        </div>
        {/* <!-- Portfolio Cards --> */}
        <div className="overflow-hidden mt-24 w-full h-full relative">
          <div className="flex gap-16 animate-scroll min-h-[600px]">
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
