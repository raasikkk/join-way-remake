const Authors = () => {
  return (
    <>
      <section className="authors mt-[100px] container mx-auto">
        <div className="authors-cards gap-[50px] grid md:grid-cols-2 lg:grid-cols-4">
          <div className="author-card shadow-lg shadow-j-blue/35 hiddenYEl">
            <img
              src="/dimash (1).png"
              className="w-[75%] mx-auto"
              alt="author"
            />
            <h2 className="font-bold text-[19px] mt-[16px]">
              Dimash Aizharykov
            </h2>
            <p className="pb-[55px] font-medium text-[15px]">
              CEO / Full Stack Developer
            </p>
          </div>
          <div className="author-card shadow-lg shadow-j-blue/35 hiddenYEl">
            <img
              src="/rasul (1).png"
              className="w-[75%] mx-auto"
              alt="author"
            />
            <h2 className="font-bold text-[19px] mt-[16px]">
              Rasul Zhankeldiuly
            </h2>
            <p className="pb-[55px] font-medium text-[15px]">
              Full Stack Developer
            </p>
          </div>
          <div className="author-card shadow-lg shadow-j-blue/35 hiddenYEl">
            <img
              src="/issatay (1).png"
              className="w-[75%] mx-auto"
              alt="author"
            />
            <h2 className="font-bold text-[19px] mt-[16px]">
              Issatay Makhanbetov
            </h2>
            <p className="pb-[55px] font-medium text-[15px]">Web Designer</p>
          </div>
          <div className="author-card shadow-lg shadow-j-blue/35 hiddenYEl">
            <img src="/darzhan.png" className="w-[75%] mx-auto" alt="author" />
            <h2 className="font-bold text-[19px] mt-[16px]">
              Darzhan Eduardovich
            </h2>
            <p className="pb-[55px] font-medium text-[15px]">
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authors;
