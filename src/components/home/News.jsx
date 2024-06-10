import { NavLink } from "react-router-dom";
import { useNewsContext } from "../../context/NewsContext";

function News() {
  const { setNewsIndex, news } = useNewsContext();
  return (
    <section className=" bg-newsComponents xs:bg-contain xl:bg-cover bg-no-repeat py-12">
      <h1 className="text-white text-center text-7xl pt-12 pb-8"> NEWS </h1>
      <div className="flex justify-center gap-20 xl:px-40 xs:flex-wrap 3xl:px-80">
        {news &&
          news.slice(news.length - 3, news.length).map((n) => (
            <div
              key={n.id}
              className="bg-news bg-no-repeat bg-cover bg-center border-r-2 border-r-third flex flex-col justify-center items-center py-4 xs:px-16 xl:w-1/4 xl:px-8"
            >
              <img src={n.img} alt={n.title} />
              <h1 className="xs:text-lg xl:text-xl py-6"> {n.title} </h1>
              <p className="text-left py-2"> {n.text} </p>
              <button
                className="bg-button bg-cover bg-no-repeat px-12 py-1 mt-4 "
                onClick={() => setNewsIndex(n.id)}
              >
                <NavLink to={`/blog/${n.title}`} className="text-white">
                  Read More
                </NavLink>
              </button>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/blog"
          className="text-white bg-button bg-cover bg-no-repeat bg-center py-2 mt-8 px-16 xl:text-2xl"
        >
          View More
        </NavLink>
      </div>
    </section>
  );
}

export default News;
