import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clients } from "../constants/clients";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Preloader from "../components/Preloader";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ClientDetails = () => {
  useIntersectionObserver("show");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const client = clients.find((c) => c.id === parseInt(id || "", 10));

  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">{client.name}</h1>
        <img src={client.image} alt={client.name} className="my-4 w-full" />
        <p className="text-xl">{client.description}</p>
        <p className="text-xl mt-4">
          <strong>Goal:</strong> {client.goal}
        </p>
        <p className="text-xl mt-4">
          <strong>Solution:</strong> {client.solution}
        </p>
        <p className="text-xl mt-4">
          <strong>Result:</strong> {client.result}
        </p>
        {client.comment && (
          <p className="text-xl mt-4">
            <strong>Comment:</strong> {client.comment}
          </p>
        )}
      </div>
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
      <Contact />
      <Footer />
    </>
  );
};

export default ClientDetails;
