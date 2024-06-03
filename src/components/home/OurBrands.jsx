import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brands from "../../data/Brands.json";

function OurBrands() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="pb-6 px-2">
      <h1 className="text-white text-center xs:text-3xl xl:text-5xl xl:pb-12">
        OUR BRANDS
      </h1>
      <Slider {...settings}>
        {brands &&
          brands.map((brand) => (
            <div
              key={brand.key}
              className="bg-button bg-no-repeat bg-center xs:bg-contain xs:px-16 xs:py-8 xl:bg-cover xl:px-48 xl:py-6"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="xs:h-4 xl:h-12"
              />
            </div>
          ))}
      </Slider>
      <p className="text-md text-white text-center xl:px-64 xl:py-10">
        Grow your empire as you learn to repair, build and customize PCs at the
        next level. Experience deeper simulation, an upgraded career mode, and
        powerful new customisation features. Use realistic parts from the
        biggest brands in the industry.
      </p>
    </section>
  );
}

export default OurBrands;
