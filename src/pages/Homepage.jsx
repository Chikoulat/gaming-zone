import ProductsCategory from "../components/home/ProductCategory";
import Carousel from "../components/home/Carousel";
import NewProducts from "../components/home/NewProducts";
import Builder from "../components/home/Builder";
import PrebuiltComputer from "../components/home/PrebuiltComputer";
import OurBrands from "../components/home/OurBrands";
import News from "../components/home/News";

function Homepage() {
  return (
    <section>
      <Carousel />
      <ProductsCategory />
      <NewProducts />
      <Builder />
      <PrebuiltComputer />
      <OurBrands />
      <News />
    </section>
  );
}

export default Homepage;
