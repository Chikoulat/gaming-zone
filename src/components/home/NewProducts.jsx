import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import newProducts from "../../data/NewProducts.json";

function NewProducts() {
  const [index, setIndex] = useState(0);

  const autoplay = true;
  const autoplaySpeed = 5000;
  const transitionSpeed = 600;

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          return (prevIndex + 1) % newProducts.length;
        });
      }, autoplaySpeed);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, autoplaySpeed]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % newProducts.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? newProducts.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  return (
    <section
      className="flex flex-col items-center text-white text-center border-t-2 border-t-gzred p-20"
      {...swipeHandlers}
    >
      <h1 className="xs:text-3xl xl:text-5xl">NEW MODELS</h1>
      <h2 className="border-l-4 border-l-gzred border-l- my-4 pl-2">
        {" "}
        THE EPIC GAMING STORE
      </h2>
      <div className="flex justify-center gap-10 flex-wrap xl:flex-nowrap">
        {newProducts &&
          newProducts.map((product) => (
            <div
              key={product.key}
              className={`xl:flex xs:flex xs:gap-6 xl:gap-2 flex-col justify-evenly items-center  bg-newProduct bg-no-repeat bg-cover w-full py-8 3xl:bg-contain 3xl:bg-center 3xl:w-1/2 3xl:px-4 
xs:duration-${transitionSpeed} xs:${product.key - 1 === index ? "" : "hidden"}`}
            >
              <img
                src={product.img}
                alt={product.name}
                className="xl:w-32 xl:h-32 hover:animate-ping hover:animate-once"
              />
              <h2 className="text-xl"> {product.name} </h2>
              <h4 className="text-lg"> {product.category} </h4>
              <p className="text-xs px-4 3xl:w-60"> {product.description} </p>
              <p> {product.price} dz</p>
              <button
                type="button"
                className="bg-buttonB bg-center bg-cover px-14 py-1 hover:text-primary"
              >
                {product.config ? "Config" : "View"}
              </button>
            </div>
          ))}
      </div>
      <button className="xs:hidden  " onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gzred"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="xs:hidden  " onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gzred"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}

export default NewProducts;
