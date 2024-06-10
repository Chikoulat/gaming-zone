import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import logo from "../assets/logo.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";
import youtube from "../assets/social/youtube.png";

function NavBar() {
  const { shop } = useCartContext();
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
        <NavLink
          to="/shopping-cart"
          className="xs:hidden xl:flex xl:items-center xl:ml-60"
        >
          {" "}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR4nO2XS2gTYRDHP5/gQRFR8JFmZtOd2RJRxHrVCooKotiCB8FHD568FPTkSU9asKLgwYtQ8GZ9nPQgou2hpDuTqAgFvehFT4qiqCA+iEwTH22TZtNkSZT8YViyO9/Hb9n5zzdxrqWWWvrPJEDdinxbgO/9HQp8V4FO5p2b0zC40PcTAvRVkQcVqH9SIJ0XpE/iBfsbBiht7WsVOS9IR9Sj7dMC6Ikin3KNlCIPCPJnAy0VAnTaNasEabj5AZGfTzWQ1CEKxqTuOgDS6DQDQR0CedAMmknQmtoAga6WNJAXLTKJxKJSe1v7KtS531UTYDnzaMQYgwDL7W/PsxBsdc2oYdc13wBDjzbPehMBuijAI9WGi6AwSbsF+Ucu2bGqFsBeazPVhqsEB7xPgN8L8KVZwxUBN1iNVIrHAEuj7DeeTi8UpAuK/N1eJO/c3BoBeSSKEbIRCj2XSiUVOSPArwWDna6ZpBjsVaS31hUetgWr67ZxeZNQb2SnAvWbGew65Ny8usHNZJJsM33SiZkxyduqOkEw6FOkd4p0XyC9MjY4BeopDrRVniD0QoCP1/2TTpUg31GkKw0d+//ZeVC8DhagZ4J845Hvr5gpN5NILxOPjyrwMVsXO5x6fFCBvinyuCK/MieOeby+VG4uFawToDcK/NLyBfhLCHQgNrjRIFiswB+syCcAOjsXKPKtckOAIj0Q5JuWZ78F6IStLzcH1ixJBZvMiQY6+SSYwbWev+dXbuj7S+xeLtm+MRbAHPNy6/wh+jv+ANJZQXpaqucV6/TM7xcE3mXrrS5jASwA8YAAfVSkywo0ZNOHjUiuVC5Qjz1XoGuWb+sE+JyLU9b3QqTDAnTd/pNUmnoFaYvlWb4iH2ravtlSSy25+PUTA607IEHtDWkAAAAASUVORK5CYII="
            alt="shopping cart"
          />
          {shop && <span className="text-gzred"> {shop}</span>}
        </NavLink>
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="xl:hidden text-white text-center flex flex-col items-center justify-center relative z-50 bg-newred mx-12 mt-3 rounded-md xs:gap-4 xs:py-4 xs:z-10"
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
