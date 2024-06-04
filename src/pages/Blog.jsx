import { NavLink } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import instagram from "../assets/social/instagram.png";

function Blog() {
  const { setNewsIndex, news } = useNewsContext();

  return (
    <section className="text-white">
      <div className=" bg-builds bg-cover bg-no-repeat bg-bottom xl:py-12">
        {" "}
        <h1 className="text-center py-8 xs:text-3xl xl:text-7xl">BLOG</h1>
      </div>

      <div className="flex flex-wrap gap-16 justify-center py-12">
        {news &&
          news.map((article) => (
            <div key={article.id} className="flex flex-col gap-3 w-1/4">
              <img src={article.img} alt="article" />
              <p>october 19, 2023 / news</p>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setNewsIndex(article.id)}
                  className="text-gzred"
                >
                  <NavLink to={`/blog/${article.title}`}>
                    Read more {">"}
                  </NavLink>
                </button>
                <div className="flex items-center gap-2">
                  <p>Share:</p>

                  <a href="">
                    <img src={twitter} alt="Twitter" className="size-8" />
                  </a>
                  <a href="">
                    <img src={facebook} alt="Facebook" className="size-8" />
                  </a>
                  <a href="">
                    <img src={instagram} alt="Instagram" className="size-8" />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Blog;
