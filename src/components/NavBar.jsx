import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";
import youtube from "../assets/social/youtube.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const divBg =
    "flex justify-center items-center xs:size-4 xl:bg-social xl:bg-no-repeat xl:bg-center xl:bg-cover xl:w-10 xl:size-8";
  return (
    <section className="bg-navbar bg-no-repeat bg-center xs:bg-contain xs:h-24 xl:h-36 xl:bg-cover relative z-10">
      <div className="flex xs:gap-16 xs:justify-between xl:justify-start xl:gap-36 xl:px-32 3xl:px-80">
        <div className=" p-2 gap-8 xs:hidden xl:flex ">
          <p className="text-white ">Follow us</p>
          <div className="flex xs:gap-2 xl:gap-8">
            <div className={divBg}>
              <a href="https://www.facebook.com/divatechdz/">
                <img src={facebook} alt="facebook" className="xl:h-6" />
              </a>
            </div>
            <div className={divBg}>
              <a href="">
                <img src={instagram} alt="instagram" className="xl:h-6" />
              </a>
            </div>
            <div className={divBg}>
              <a href="">
                <img src={twitter} alt="twitter" className="xl:h-6" />
              </a>
            </div>
            <div className={divBg}>
              <a href="">
                <img src={youtube} alt="youtube" className="xl:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="xs:mx-auto xl:mx-0">
          <img
            src={logo}
            alt="logo"
            className="xs:w-28 xl:h-24 xl:w-60"
            onClick={() => {
              if (window.innerWidth <= 1000) {
                setOpen(!open);
              }
            }}
          />
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="xl:hidden text-white text-center flex flex-col items-center justify-center relative bg-newred mx-12 mt-3 rounded-md xs:gap-4 xs:py-4 xs:z-10"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/config">Config</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <a href="https://divatech.dz/">Divatech</a>

          <div className="flex gap-2">
            <a href="https://www.facebook.com/divatechdz/">
              <img src={facebook} alt="facebook" className="size-4" />
            </a>

            <a href="">
              <img src={instagram} alt="instagram" className="size-4 " />
            </a>

            <a href="">
              <img src={twitter} alt="twitter" className="size-4" />
            </a>

            <a href="">
              <img src={youtube} alt="youtube" className="size-4" />
            </a>
          </div>
        </div>
      )}

      <div className="xs:hidden xl:flex xl:justify-center xl:gap-96 xl:text-white xl:text-xl">
        <div className="flex gap-24">
          <NavLink
            to="/"
            className="hover:animate-pulse hover:underline hover:decoration-gzred"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="hover:animate-pulse hover:underline hover:decoration-gzred"
          >
            Products
          </NavLink>
          <NavLink
            to="/config"
            className="hover:animate-pulse hover:underline hover:decoration-gzred"
          >
            Config
          </NavLink>
        </div>

        <div className="flex gap-24">
          <NavLink
            to="/contact"
            className="hover:animate-pulse hover:underline hover:decoration-gzred"
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:animate-pulse hover:underline hover:decoration-gzred"
          >
            Blog
          </NavLink>
          <a
            href="https://divatech.dz/"
            className="hover:animate-pulse hover:underline hover:decoration-gzred"
          >
            Divatech
          </a>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
