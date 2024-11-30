const Project = () => {
  return (
    <div className="">
      <div className="portfolio-card rounded-3xl shadow-2xl shadow-black hiddenYEl show">
        <img
          src="/grand-market.png"
          alt="join-way-shop"
          className=" rounded-t-3xl w-full"
        />
        <div className="descr shadow-2xl shadow-black rounded-b-3xl bg-white p-8 ">
          <h3 className="text-j-blue font-bold text-3xl">Grand Market</h3>
          <p className="mt-3 text-j-blue text-xl">
            Our team designed the website with a focus on simple navigation and
            a structure that ensures ease of use.{" "}
          </p>
          <div className="buttons mt-8 flex justify-between gap-6">
            <button className="bg-j-blue text-2xl text-white rounded-2xl w-60 h-20">
              Подробнее
            </button>
            <button className="bg-white text-2xl border-4 border-j-blue rounded-2xl w-60 h-20">
              Сайт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
