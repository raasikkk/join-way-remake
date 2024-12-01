import Project from "./Project";
import { clients } from "../constants/clients";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="portfolio mt-[130px] container mx-auto overflow-hidden"
    >
      <div className="container mx-auto">
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold text-j-blue dark:text-j-yellow hiddenYEl max-w-[527px]">
          Посмотрите Наше Портфолио
        </h1>
      </div>

      {/* Manual Scroll Portfolio */}
      <div className="mt-24 w-full min-h-[600px] overflow-x-auto flex gap-8 scroll-smooth no-scrollbar">
        {clients.map((client) => (
          <Project key={client.id} client={client} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
