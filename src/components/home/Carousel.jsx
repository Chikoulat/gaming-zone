import { useEffect, useState } from "react";
import slides from "../../data/Slides.json";
import { useSwipeable } from "react-swipeable";

function Carousel() {
  const [index, setIndex] = useState(0);

  const autoplay = true;
  const autoplaySpeed = 5000;
  const pauseHover = true;
  const transitionSpeed = 600;

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          return (prevIndex + 1) % slides.length;
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
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const hoverSlide = (intervalId) => {
    if (pauseHover) clearInterval(intervalId);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  function navigateToSlide(slideIndex) {
    setIndex(slideIndex);
  }

  const button =
    "text-white xl:text-2xl bg-primary bg-cover px-6 border-gzred py-1 hover:bg-gzred hover:shadow-button hover:shadow-gzred";

  return (
    <section
      className="bg-banner bg-no-repeat bg-cover relative py-16 3xl:px-56"
      {...swipeHandlers}
    >
      {slides &&
        slides.map((slide) => (
          <div
            key={slide.key}
            className={`flex flex-col-reverse xl:flex-row items-center justify-center xl:gap-28 duration-${transitionSpeed} ${
              slide.key - 1 === index ? "block" : "hidden"
            }`}
            onMouseEnter={hoverSlide}
          >
            {" "}
            <div className="flex flex-col gap-9">
              <h1 className="text-lg text-cyan-50 border-l-4 border-l-gzred pl-6">
                {slide.title}
              </h1>
              <h3 className="xl:text-2xl text-cyan-50 w-80">{slide.text}</h3>
              <div className="flex gap-8">
                <a href="/products" className={button}>
                  {" "}
                  Products{" "}
                </a>
                <button className={button}> Trending </button>
              </div>
              <div className="flex justify-start gap-3">
                {slides &&
                  slides.map((slide) => (
                    <span
                      key={slide.key}
                      className={`h-1 w-16 rounded-none ${
                        slide.key - 1 === index
                          ? "bg-gzred shadow-button"
                          : "bg-gray-300"
                      }`}
                      onClick={() => navigateToSlide(slide.key - 1)}
                    ></span>
                  ))}
              </div>
            </div>
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-80 h-96 xl:w-500 xl:h-512"
            />
          </div>
        ))}{" "}
      <button
        className="xs:hidden xl:block xl:absolute xl:top-1/2 xl:left-0 xl:transform xl:-translate-y-1/2 pl-16"
        onClick={prevSlide}
      >
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
      <button
        className="xs:hidden xl:block xl:absolute xl:top-1/2 xl:right-0 xl:transform xl:-translate-y-1/2 pr-16"
        onClick={nextSlide}
      >
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

export default Carousel;
