import { Link } from "react-router-dom";
import products from "../../data/ProductsData.json";

function ProductCategory() {
  return (
    <section className="flex flex-col justify-center p-20 gap-10 bg-secondary text-zinc-100 border-t-2 border-t-gzred animate-fade-up xl:flex-row">
      {products.map((product) => (
        <div
          key={product.key}
          className="bg-product bg-bottom bg-no-repeat pb-10 hover:transform hover:scale-110 transition-transform duration-200"
        >
          <img src={product.src} alt={product.name} />
          <div className="pb-2 flex flex-col items-center ">
            <h3 className="text-2xl mb-10">{product.name}</h3>
            <Link
              to={product.link}
              className="text-lg px-12 py-1 bg-button bg-center bg-cover hover:shadow-gzred hover:text-primary"
            >
              {" "}
              Discover{" "}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductCategory;
