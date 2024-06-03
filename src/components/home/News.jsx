import news from "../../data/News.json";

function News() {
  return (
    <section className=" bg-newsComponents xs:bg-contain xl:bg-cover bg-no-repeat py-12">
      <h1 className="text-white text-center text-7xl pt-12 pb-8"> NEWS </h1>
      <div className="flex justify-center gap-20 xl:px-40 xs:flex-wrap 3xl:px-80">
        {news &&
          news.slice(-3).map((n) => (
            <div
              key={n.key}
              className="bg-news bg-no-repeat bg-cover bg-center border-r-2 border-r-third flex flex-col justify-center items-center py-4 xs:px-16 xl:w-1/4 xl:px-8"
            >
              <img src={n.img} alt={n.title} />
              <h1 className="xs:text-lg xl:text-xl py-6"> {n.title} </h1>
              <p className="text-left py-2"> {n.text} </p>
              <button className="bg-button bg-cover bg-no-repeat px-12 py-1 mt-4 ">
                <a href={n.link} className="text-white">
                  Read More
                </a>
              </button>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <button className="text-white xl:text-2xl bg-button bg-no-repeat bg-center xs:bg-contain xl:bg-cover px-20 py-2 mt-8 ">
          View More
        </button>
      </div>
    </section>
  );
}

export default News;
