import { NavLink } from "react-router-dom";
import builder from "../../assets/images/build pc.png";

function Builder() {
  return (
    <section className="flex flex-col-reverse justify-center items-center text-white bg-builds bg-cover bg-center bg-no-repeat py-40 xl:flex-row xl:p-20 xl:bg-contain xl:gap-72">
      <div className="w-full text-center xl:w-96">
        <h2 className="text-xl mb-2 xl:mb-8 xl:text-6xl">
          BUILD YOUR DREAM PC
        </h2>
        <p className="mb-8 xl:w-auto">
          Grow your empire as you learn to repair, build and customize PCs at
          the next level. Experience deeper simulation, an upgraded career mode,
          and powerful new customisation features. Use realistic parts from 40+
          hardware brands to bring your ultimate PC to life.
        </p>
        <button className="bg-button bg-cover px-8 py-1 xl:text-3xl hover:text-primary hover:animate-pulse">
          <NavLink to="/builder">BUILD NOW</NavLink>
        </button>
      </div>
      <div>
        <img
          src={builder}
          alt="built pc"
          className="w-512 xl:w-400 bg-builtPC bg-cover bg-no-repeat animate-pulse"
        />
      </div>
    </section>
  );
}

export default Builder;
