import { useNewsContext } from "../context/NewsContext";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import instagram from "../assets/social/instagram.png";
import { NavLink } from "react-router-dom";

function SingleBlog() {
  const { newsIndex, news } = useNewsContext();

  const index = newsIndex - 1;

  console.log(newsIndex);

  return (
    <section className="text-white relative">
      <div className=" bg-builds bg-cover bg-no-repeat bg-bottom xl:py-12 z-10 relative">
        {" "}
        <h1 className="text-center py-6 xs:text-3xl xl:text-7xl">BLOG</h1>
      </div>
      {news && (
        <div>
          <img
            src={news[index].img}
            alt="article"
            className="w-full h-512 px-40 absolute z-0 -top-20"
          />
          <div className="relative xl:mt-80 text-center">
            {" "}
            <p className="text-xl pb-5">october 19, 2023 / news</p>
            <h3 className="text-4xl pb-5"> {news[index].title} </h3>
            <p className="px-40"> {news[index].text}</p>
          </div>
        </div>
      )}
      <div className="flex justify-between px-52 py-6">
        <div className="flex gap-2">
          <p>TAGS:</p>
          <p>new / esports / matches</p>
        </div>
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
      <hr className="border-2 border-secondary" />
      <div className="flex justify-center pb-12">
        <NavLink
          to="/blog"
          className="text-white xl:text-2xl bg-button bg-no-repeat bg-center xs:bg-contain xl:bg-cover xs:px-28 xl:px-20 py-2 mt-8"
        >
          View More
        </NavLink>
      </div>
    </section>
  );
}

export default SingleBlog;
