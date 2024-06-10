import { useNewsContext } from "../context/NewsContext";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import instagram from "../assets/social/instagram.png";
import { NavLink } from "react-router-dom";

function SingleBlog() {
  const { newsIndex, news } = useNewsContext();

  const index = newsIndex - 1;

  return (
    <section className="text-white ">
      <div className=" bg-builds bg-cover bg-no-repeat bg-bottom xl:py-12 xl:z-10 xl:relative">
        {" "}
        <h1 className="text-center pb-10 xs:text-3xl xl:text-7xl">BLOG</h1>
      </div>
      {news && (
        <div>
          <img
            src={news[index].img}
            alt="article"
            className="w-full xl:h-512 px-40 xl:absolute xl:z-0 xl:-top-20"
          />
          <div className="relative xl:mt-80 text-center">
            {" "}
            <p className="xl:text-xl pb-5">october 19, 2023 / news</p>
            <h3 className="xl:text-4xl pb-5"> {news[index].title} </h3>
            <p className="xl:px-40 xl:text-xl py-6"> {news[index].text}</p>
            <p className="xl:px-40 xs:px-6 xs:text-left">
              {" "}
              {news[index].article}{" "}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-between xs:px-2 xl:px-52 py-6 xs:gap-10 xl:gap-10">
        <div className="flex gap-2">
          <p>TAGS:</p>
          <p>new / esports / matches</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Share:</p>

          <a href="">
            <img src={twitter} alt="Twitter" className="xs:size-6 xl:size-8" />
          </a>
          <a href="">
            <img
              src={facebook}
              alt="Facebook"
              className="xs:size-6 xl:size-8"
            />
          </a>
          <a href="">
            <img
              src={instagram}
              alt="Instagram"
              className="xs:size-6 xl:size-8"
            />
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
