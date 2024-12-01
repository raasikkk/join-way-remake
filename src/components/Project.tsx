import { Client } from "../constants/clients";
import { useNavigate } from "react-router-dom";

interface ProjectProps {
  client: Client;
}

const Project = ({ client }: ProjectProps) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
    navigate(`/client/${client.id}`);
  };

  return (
    <div className="">
      <div className="portfolio-card rounded-3xl shadow-lg shadow-black/50 ">
        <img
          src={client.image}
          alt="join-way-shop"
          className=" rounded-t-3xl w-full"
        />
        <div className="descr shadow-lg shadow-black/50 rounded-b-3xl bg-white p-8 ">
          <h3 className="text-j-blue font-bold xxxs:text-lg md:text-2xl lg:text-3xl">
            {client.name}
          </h3>
          <p className="mt-3 text-j-blue xxxs:text-base md:text-lg lg:text-xl">
            {client.description}
          </p>
          <div className="buttons mt-8 flex justify-between gap-6">
            <button
              className="btn-size bg-j-blue text-white rounded-2xl hover:bg-j-blue/80"
              onClick={handleDetailsClick}
            >
              Подробнее
            </button>
            <button className="btn-size bg-white border-4 border-j-blue rounded-2xl hover:bg-j-blue/20">
              Сайт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
