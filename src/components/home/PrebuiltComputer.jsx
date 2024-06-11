import { useCallback, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useBuildContext } from "../../context/PreBuildContext";
import money from "../../assets/images/save-money.png";
import achievement from "../../assets/images/achievement.png";
import quality from "../../assets/images/g2985.png";
import { NavLink } from "react-router-dom";

function PrebuiltComputer() {
  const { setIndex, products } = useBuildContext();
  const [cat, setCat] = useState("Budget");
  const [current, setCurrent] = useState(0);

  const autoplay = true;
  const autoplaySpeed = 4000;
  const transitionSpeed = 600;

  const getCategoryRange = useCallback(
    (cat) => {
      const indices = products.reduce((acc, product, index) => {
        if (product.category === cat) {
          acc.push(index);
        }
        return acc;
      }, []);

      return [indices[0], indices[indices.length - 1]];
    },
    [products]
  );

  useEffect(() => {
    const [start] = getCategoryRange(cat);
    setCurrent(start);
  }, [cat, getCategoryRange]);

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        const [start, end] = getCategoryRange(cat);

        setCurrent((prevIndex) => {
          if (prevIndex <= start || prevIndex >= end) {
            return start;
          } else {
            return prevIndex + 1;
          }
        });
      }, autoplaySpeed);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, autoplaySpeed, cat, getCategoryRange]);

  const nextSlide = () => {
    const [start, end] = getCategoryRange(cat);

    setCurrent((prevIndex) => {
      if (prevIndex < start || prevIndex >= end) {
        return start;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevSlide = () => {
    const [start, end] = getCategoryRange(cat);

    setCurrent((prevIndex) => {
      if (prevIndex <= start || prevIndex > end) {
        return end;
      } else {
        return prevIndex - 1;
      }
    });
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const handleCat = (e) => {
    setCat(e.target.value);
  };

  const handlePrebuild = (e) => {
    setIndex(e);
  };

  return (
    <section className="text-white" {...swipeHandlers}>
      <h1 className="text-5xl text-center xs:py-20 xl:py-40 bg-title bg-center bg-no-repeat bg-cover">
        PREBUILT COMPUTERS
      </h1>

      <div className="flex justify-center gap-2 pb-20 xs:text-lg xs:flex-col xl:flex-row xl:text-2xl ">
        <button
          onClick={handleCat}
          value="Budget"
          className={`flex-initial bg-no-repeat bg-center bg-cover py-3 hover:bg-button xs:mr-auto xs:px-28 xl:mr-0 xl:px-36 ${
            cat === "Budget" ? "bg-button" : "bg-buttonC"
          }`}
        >
          BUDGET
        </button>
        <button
          onClick={handleCat}
          value="Performance"
          className="bg-buttonC bg-no-repeat bg-center bg-cover py-3 hover:bg-button focus:bg-button xs:mx-auto xs:px-20 xl:mx-0 xl:px-28"
        >
          PERFORMANCE
        </button>
        <button
          onClick={handleCat}
          value="Workstation"
          className="bg-buttonC bg-no-repeat bg-center bg-cover py-3 hover:bg-button focus:bg-button xs:ml-auto xs:px-20 xl:px-28 xl:ml-0"
        >
          WORKSTATION
        </button>
      </div>
      <div className="flex justify-center items-center flex-row xl:gap-4 xs:px-44 xl:px-60 xs:py-10 xl:py-20 xs:relative">
        {products &&
          products
            .filter((product) => {
              return product.category.includes(cat);
            })
            .map((product, index, self) => (
              <div
                className={`xl:flex xl:flex-row gap-6 xs:duration-${transitionSpeed} xs:${
                  product.key - 1 === current ? "flex flex-col" : "hidden"
                } `}
                key={product.key}
              >
                <div className="flex flex-col justify-center items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-preBuilt bg-no-repeat bg-cover absolute animate-spin animate-infinite animate-duration-[40000ms] xs:size-64 xl:size-96" />
                    <img
                      src={product.img}
                      alt={product.name}
                      className="size-48 relative"
                    />
                  </div>

                  <h1 className="text-newred text-3xl relative mt-16">
                    {product.name}
                  </h1>
                  <p className="w-5/6 h-32">{product.description}</p>
                  <div className="flex justify-center gap-2 px-2">
                    <button className="bg-button bg-no-repeat bg-contain bg-center px-10 py-3 hover:text-primary">
                      CUSTOMIZE
                    </button>

                    <NavLink
                      to={`/pre-build/${product.name.replace(/\s/g, "-")}`}
                      className="bg-border bg-no-repeat bg-cover bg-center py-3 px-7"
                    >
                      <button onClick={() => handlePrebuild(product.key)}>
                        PRECONFIGURED
                      </button>
                    </NavLink>
                  </div>
                </div>

                <hr
                  className={`xl:border-2 xl:border-secondary xl:rotate-180 xl:${
                    index !== self.length - 1 ? "h-96" : "hidden"
                  } xs:hidden xl:block`}
                />
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        <button className="xs:text-xl xl:text-2xl bg-button bg-no-repeat bg-center bg-cover xs:px-12 xs:py-3 xl:px-24 xl:py-6">
          DISCOVER MORE
        </button>
      </div>
      <div className="bg-builds bg-cover bg-center bg-no-repeat flex items-center xs:flex-col-reverse xs:px-4 xs:py-44 xl:flex-row xl:px-60 xl:py-40 my-20">
        <div>
          <h1 className="text-newred font-bold xs:text-4xl xs:text-center xl:text-left xl:text-6xl py-4">
            WHY GO PREBUILT
          </h1>
          <p className="xl:w-5/6">
            These gaming PCs aren&apos;t just built by experts, they&apos;re
            designed by them too! Gaming zone Prebuilt gaming PCs are made with
            budget and experience in mind.
          </p>
          <div className="xl:mt-8 xl:w-5/6">
            <div className="flex gap-5 items-center my-4">
              <img src={money} alt="Price" />
              <div>
                <h4 className="font-extrabold">Price</h4>
                <p>
                  Save on building fees and the cost of purchasing parts
                  separately.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center my-4">
              <img src={achievement} alt="Quality" />
              <div>
                <h4 className="font-extrabold">Quality</h4>
                <p>
                  Get the same high-quality components you would when purchasing
                  a Custom PC.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center my-4">
              <img src={quality} alt="Convenience" />
              <div>
                <h4 className="font-extrabold">Convenience</h4>
                <p>
                  Prebuilt Player PCs are assembled by experts, with a simple
                  lineup of products to choose from.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="src/assets/images/built.png"
            alt="built"
            className="xs:w-150 xl:w-512"
          />
        </div>
      </div>
    </section>
  );
}

export default PrebuiltComputer;
