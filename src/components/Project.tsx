import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// interface ProjectProps {
//   client: Client;
// }

const Project = ({ client }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // // Helper function to get the client data based on the current language
  // const getFieldByLanguage = (client, field) => {
  //   const lang = i18n.language; // Get the current language
  //   return client[`${field}_${lang}`] || client[`${field}_en`]; // Default to English if the language is not available
  // };

  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
    navigate(`/client/${client.id}`);
  };

  return (
    <div className="">
      <div className="portfolio-card rounded-3xl shadow-lg shadow-black/50">
        <img
          src={client.image}
          alt="join-way-shop"
          className="rounded-t-3xl w-full"
        />
        <div className="descr shadow-lg shadow-black/50 rounded-b-3xl bg-white p-8">
          <h3 className="text-j-dark font-bold xxxs:text-lg md:text-2xl lg:text-3xl">
            {client.name}
          </h3>
          <p className="mt-3 text-j-dark xxxs:text-base md:text-lg lg:text-xl">
            {/* Use getFieldByLanguage to fetch the correct description */}
            {client.description}
          </p>
          <div className="buttons mt-8 flex justify-between gap-6">
            <button
              className="btn-size bg-j-dark text-white rounded-2xl hover:bg-j-dark/80"
              onClick={handleDetailsClick}
            >
              {t("card_btn_1")}
            </button>
            <Link
              to={client.link}
              className="btn-size bg-white border-4 border-j-dark rounded-2xl hover:bg-j-dark/20"
            >
              {t("card_btn_2")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
