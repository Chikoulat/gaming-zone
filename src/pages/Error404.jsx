import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <section className="mx-auto text-white">
      <div className=" w-full  leading-snug text-center">
        <div className="container mx-auto px-6 xl:px-12  items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You are all alone here
            </h1>

            <p className="font-extrabold text-8xl my-20 text-white animate-bounce">
              404
            </p>
          </div>
          <div className="flex justify-center xs:flex-col xl:flex-row gap-4">
            <NavLink
              to="/"
              className="bg-buttonC bg-center bg-cover bg-no-repeat xs:px-20 xl:px-12 py-2"
            >
              Go back Home
            </NavLink>
            <NavLink
              to="/products"
              className="bg-buttonC bg-center bg-cover bg-no-repeat xs:px-20 xl:px-12 py-2"
            >
              Visit products
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
