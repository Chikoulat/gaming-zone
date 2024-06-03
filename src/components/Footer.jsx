import { NavLink } from "react-router-dom";
import GZ from "../assets/Gaming Zone By Divatech White.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";
import youtube from "../assets/social/youtube.png";

function Footer() {
  return (
    <section>
      <div className="flex justify-between px-10 gap-16 text-white border-t-2 border-t-newred py-8 xs:flex-col xl:flex-row xl:items-center">
        <ul className="flex xs:flex-col xs:w-80 xl:flex-row xl:w-500 xl:gap-36">
          <li>
            <p className="font-semibold text-lg">Service apres vente:</p> Centre
            commercial et des affaires mohammadia mall 2ème étages local n1095
            mohammadia w.alger.
          </li>
          <li>
            <p className="font-semibold text-lg">Administration:</p> Centre
            commercial et des affaires mohammadia mall 7em étages local n1262
            mohammadia w.alger.
          </li>
        </ul>

        <div className="flex flex-col items-start gap-4 text-left">
          <h3 className="text-xl text-gzred">Support</h3>
          <div className="text-xl flex flex-row gap-10">
            <NavLink to="/contact" className="hover:text-newred">
              Contact
            </NavLink>

            <NavLink to="" className="hover:text-newred">
              Service
            </NavLink>

            <NavLink to="" className="hover:text-newred">
              Affiliations
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl text-gzred">Newsletter</h3>
          <input
            type="text"
            placeholder="Enter your email"
            className="focus:ring-2 focus:ring-newred focus:outline-none text-slate-900 placeholder-slate-400 rounded-sm py-2 pl-10 "
          />
          <button
            type="submit"
            className="bg-button bg-center bg-contain bg-no-repeat px-12 py-4"
          >
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-stretch px-4">
        <div>
          <img src={GZ} alt="Gaming Zone" className="xs:w-1/3 xl:w-1/6" />
        </div>
        <div className="flex gap-4">
          <a href="">
            <img src={facebook} alt="Facebook" className="xs:w-96 xl:w-2/3" />
          </a>
          <a href="">
            <img src={instagram} alt="Instagram" className="xs:w-96 xl:w-2/3" />
          </a>
          <a href="">
            <img src={twitter} alt="Twitter" className="xs:w-96 xl:w-2/3" />
          </a>
          <a href="">
            <img src={youtube} alt="Youtube" className="xs:w-96 xl:w-2/3" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
