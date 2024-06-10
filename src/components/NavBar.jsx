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
      <div className="flex xs:justify-between xl:justify-start xl:gap-36 px-32 3xl:px-80">
        <div className=" p-2 gap-8 xs:hidden xl:flex items-center">
          <p className="text-white ">Follow</p>
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
        <div className="xs:mx-auto xl:mx-8">
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
        <div className="flex items-center gap-4">
          <NavLink
            to="/sing-up"
            className="xs:hidden xl:flex justify-center gap-2 px-12 py-2 bg-button bg-contain bg-center bg-no-repeat text-white"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABxUlEQVR4nN3US4jOURgG8GHGMGVKIZeFhShsSIksXJqSyEbEQlYWZkGuZazEgoSEEiWl2bhGYSH3xmWsxsKCUihbCykb9ZtO86gvi+/i+xZy6vQ/5/2f8zznfZ/3fdva/vuBmTiGe7iNPehuFfgW/MQOfEcPPuINFjQLvhg/8Brr8Qm7cR6X8KEpTxKOvry6kEzBg3i1AdcLYTMEX/Ec1zAjtnE4jsFocutvgNfiMV6is8q56fiGu5hdL3g7XmE1nsS2PyHqwly8w6r8e481dXvyB8FAbH3xZgzmRdzl2TdGEMBy4RE+Y3Rsk1MPZY6PbX50KiGaVTdBBdFBbM16p5HxqwDHdhNLGwauIOjGF2zGqBL3vLozlf2wGfCp0eIkTiRk5XsWL9CLpym49kbBO3Af6/I9FVFXYlkS4AbOpC8dbZSgxLu3Yt+DcymsOziMOZiGfryNN0eq1c1vsBLrZ8WLGufGJnUXYUIqfBsu1iIo/aa/Di83YW/Wh7Ai65KyE2t10CFcqDEHo9GBdNmhaFOSYmE1gq6Kgqo2N+J07uzCknSBgYLR1uwwotVV7MOkkF6pTI5WkHRge+lDuFyyrWXg/9QYBvK1083xbiprAAAAAElFTkSuQmCC"
              alt="register"
            />
            Register
          </NavLink>
          <NavLink
            to="/login"
            className="xs:hidden xl:flex justify-center gap-2 px-12 py-2 bg-buttonC bg-contain bg-center bg-no-repeat text-white "
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO3Vz0sWcRAG8De0DDQ9WIeOeZL+gSDzpkWHAjWyBDGyW/QDwTpVUIqX8ODFoEshiEhihtpBtFKqvydvnT7xpYE2fffdd5NuDuxld+aZmWdmnq1UDu2ghmMYxhK+4DM+xTOFswcB78VXjOEcRvAY93ApvqfEr9FSFjyBLKILH7GA27iIfjzHNzzCVWzjdL3g1/EWN7GBMzl+DbiLdVzAFo4XgZ8MWlL7q2iqo6BE1zJu4WmR8yT6Ikl7Ybt/4iZwIxahrZZj4vVKthJMYx4dNeJOBEX3E7V5TkfSoNJGoDXz/o3f9hMzOJUT/x7nMZvX4kbO88PftouBKhgv0Y0P1RK8KJmgvwrGdGzTyv+iaCXuZj9FGaedOJxneyorGnIrNvEwbVOtBBNxqWXXdDIOdLtoTdtjVXuwVuehXQ5NGsWTeqq5hjkMxpCrUoNGPIhCuoOi2lKRCU4a8y72ejXE7k7IwkBQ+T2Utq+U2GWS9ARd4yHXwxm57s1o0Cs0lwLPJDmKoehm7w8nDbbzn4APrRL2C5FWvMK4O+QcAAAAAElFTkSuQmCC"
              alt="login"
            />
            Login
          </NavLink>
          <NavLink
            to="/shopping-cart"
            className="xs:hidden xl:flex items-center gap-1"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR4nO2XS2gTYRDHP5/gQRFR8JFmZtOd2RJRxHrVCooKotiCB8FHD568FPTkSU9asKLgwYtQ8GZ9nPQgou2hpDuTqAgFvehFT4qiqCA+iEwTH22TZtNkSZT8YViyO9/Hb9n5zzdxrqWWWvrPJEDdinxbgO/9HQp8V4FO5p2b0zC40PcTAvRVkQcVqH9SIJ0XpE/iBfsbBiht7WsVOS9IR9Sj7dMC6Ikin3KNlCIPCPJnAy0VAnTaNasEabj5AZGfTzWQ1CEKxqTuOgDS6DQDQR0CedAMmknQmtoAga6WNJAXLTKJxKJSe1v7KtS531UTYDnzaMQYgwDL7W/PsxBsdc2oYdc13wBDjzbPehMBuijAI9WGi6AwSbsF+Ucu2bGqFsBeazPVhqsEB7xPgN8L8KVZwxUBN1iNVIrHAEuj7DeeTi8UpAuK/N1eJO/c3BoBeSSKEbIRCj2XSiUVOSPArwWDna6ZpBjsVaS31hUetgWr67ZxeZNQb2SnAvWbGew65Ny8usHNZJJsM33SiZkxyduqOkEw6FOkd4p0XyC9MjY4BeopDrRVniD0QoCP1/2TTpUg31GkKw0d+//ZeVC8DhagZ4J845Hvr5gpN5NILxOPjyrwMVsXO5x6fFCBvinyuCK/MieOeby+VG4uFawToDcK/NLyBfhLCHQgNrjRIFiswB+syCcAOjsXKPKtckOAIj0Q5JuWZ78F6IStLzcH1ixJBZvMiQY6+SSYwbWev+dXbuj7S+xeLtm+MRbAHPNy6/wh+jv+ANJZQXpaqucV6/TM7xcE3mXrrS5jASwA8YAAfVSkywo0ZNOHjUiuVC5Qjz1XoGuWb+sE+JyLU9b3QqTDAnTd/pNUmnoFaYvlWb4iH2ravtlSSy25+PUTA607IEHtDWkAAAAASUVORK5CYII="
              alt="shopping cart"
              className="w-20"
            />
            {shop && <span className="text-gzred"> {shop}</span>}
          </NavLink>
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="xl:hidden text-white text-center flex flex-col items-center justify-center z-40 bg-newred mx-12 mt-1 rounded-md gap-4 py-4"
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
          <div className=" flex gap-4 ">
            <NavLink to="/sing-up">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABxUlEQVR4nN3US4jOURgG8GHGMGVKIZeFhShsSIksXJqSyEbEQlYWZkGuZazEgoSEEiWl2bhGYSH3xmWsxsKCUihbCykb9ZtO86gvi+/i+xZy6vQ/5/2f8zznfZ/3fdva/vuBmTiGe7iNPehuFfgW/MQOfEcPPuINFjQLvhg/8Brr8Qm7cR6X8KEpTxKOvry6kEzBg3i1AdcLYTMEX/Ec1zAjtnE4jsFocutvgNfiMV6is8q56fiGu5hdL3g7XmE1nsS2PyHqwly8w6r8e481dXvyB8FAbH3xZgzmRdzl2TdGEMBy4RE+Y3Rsk1MPZY6PbX50KiGaVTdBBdFBbM16p5HxqwDHdhNLGwauIOjGF2zGqBL3vLozlf2wGfCp0eIkTiRk5XsWL9CLpym49kbBO3Af6/I9FVFXYlkS4AbOpC8dbZSgxLu3Yt+DcymsOziMOZiGfryNN0eq1c1vsBLrZ8WLGufGJnUXYUIqfBsu1iIo/aa/Di83YW/Wh7Ai65KyE2t10CFcqDEHo9GBdNmhaFOSYmE1gq6Kgqo2N+J07uzCknSBgYLR1uwwotVV7MOkkF6pTI5WkHRge+lDuFyyrWXg/9QYBvK1083xbiprAAAAAElFTkSuQmCC"
                alt="register"
              />
            </NavLink>
            <NavLink to="/login">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO3Vz0sWcRAG8De0DDQ9WIeOeZL+gSDzpkWHAjWyBDGyW/QDwTpVUIqX8ODFoEshiEhihtpBtFKqvydvnT7xpYE2fffdd5NuDuxld+aZmWdmnq1UDu2ghmMYxhK+4DM+xTOFswcB78VXjOEcRvAY93ApvqfEr9FSFjyBLKILH7GA27iIfjzHNzzCVWzjdL3g1/EWN7GBMzl+DbiLdVzAFo4XgZ8MWlL7q2iqo6BE1zJu4WmR8yT6Ikl7Ybt/4iZwIxahrZZj4vVKthJMYx4dNeJOBEX3E7V5TkfSoNJGoDXz/o3f9hMzOJUT/x7nMZvX4kbO88PftouBKhgv0Y0P1RK8KJmgvwrGdGzTyv+iaCXuZj9FGaedOJxneyorGnIrNvEwbVOtBBNxqWXXdDIOdLtoTdtjVXuwVuehXQ5NGsWTeqq5hjkMxpCrUoNGPIhCuoOi2lKRCU4a8y72ejXE7k7IwkBQ+T2Utq+U2GWS9ARd4yHXwxm57s1o0Cs0lwLPJDmKoehm7w8nDbbzn4APrRL2C5FWvMK4O+QcAAAAAElFTkSuQmCC"
                alt="login"
              />
            </NavLink>

            <NavLink to="/shopping-cart" className="flex items-center gap-1">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVR4nO3WMU7DQBCF4S0hdNBREBokGjqOgyg5AjVN6DkBEpdAkCi+QyREwRHowAVUHzJaJDB2gsxmk8J/s7b1PDP7ZmRvCD096wQu8e4n1f0oVwGvOKg928FbrgJGDQ58kqWANtaigER0myeJHOg8T7pxsczNdAIbS3cgzI9zjtuQGwxwjQfsdgkwlwXvHmKGG2yFnOAUzzj7b6BfLNBv4gqPOAo5wXHsddXzwTL/km084SRJ4i9i8u2wKqzq64Uhimhtte63aKYoMcZeygKmMXEZ16JBU9Q096lPSGV0oLpu47vmJWUB49ruJn9wKakDwypgDD5p6m/UTKLmLukM9PSEDHwAYDyTpx+XqXcAAAAASUVORK5CYII="
                alt="shopping cart"
              />
              {shop && <span> {shop}</span>}
            </NavLink>
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
