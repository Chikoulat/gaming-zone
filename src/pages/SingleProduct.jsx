import { useProductContext } from "../context/ProductContext.jsx";
import { useCartContext } from "../context/CartContext.jsx";
import stores from "../data/stores.json";
import img1 from "../assets/images/Image 107.png";
import img2 from "../assets/images/Image 108.png";
import img3 from "../assets/images/Image 109.png";
import img4 from "../assets/images/Image 110.png";
import Phone from "../assets/images/phone.png";
import Map from "../assets/images/map.png";
import CPU from "../assets/products/CPU.jpg";
import GPU from "../assets/products/GPU.jpg";
import RAM from "../assets/products/ram.jpg";
import drive from "../assets/products/drive.jpg";
import motherboard from "../assets/products/Motherboard.jpg";
import PSU from "../assets/products/PSU.jpg";
import cooler from "../assets/products/CPU fan.jpg";
import monitor from "../assets/products/monitor.jpg";
import cases from "../assets/products/case.jpg";

function SingleProduct() {
  const categoryMap = {
    CPU,
    GPU,
    RAM,
    storage: drive,
    motherboard,
    "power supply": PSU,
    cooler,
    monitor,
    case: cases,
  };

  const { addToCart } = useCartContext();
  const { productIndex, products } = useProductContext();
  const index = productIndex - 1;

  const handleAddToCart = () => {
    const product = products[index];

    addToCart(product);
  };

  return (
    <section className="text-white">
      <div className="bg-builds bg-cover bg-no-repeat bg-bottom xs:pb-6 xl:pb-20">
        <h1 className="text-center xs:text-xl xl:text-5xl ">
          {products[index].name}
        </h1>
      </div>
      <div className="bg-prebuiltpage bg-contain bg-top4 bg-no-repeat py-12">
        <div className="flex justify-center items-center xs:flex-col xl:flex-row">
          <div className="flex justify-center items-center xs:flex-col xl:flex-row ">
            <p className="xl:w-1/2 px-12">{products[index].description}</p>
            <img
              src={categoryMap[products[index].category]}
              alt={products[index].name}
              className="xs:size-3/6 xl:w-96"
            />
          </div>
        </div>{" "}
        <div className="flex xs:flex-col xl:flex-row justify-between bg-bar xs:my-10 xl:my-5 xl:text-2xl xl:items-center">
          <h1 className="xl:pl-4 xs:w-full xl:w-auto">
            {products[index].name}
          </h1>
          <div className="xs:flex xs:justify-end xl:block">
            <button
              onClick={handleAddToCart}
              className="bg-button bg-no-repeat bg-center xs:-mr-16 xl:-mr-10 xs:bg-contain xs:px-16 xl:bg-cover xl:px-36 xl:py-6"
            >
              Buy now
            </button>
            <button className="bg-buttonC bg-center bg-no-repeat xs:bg-contain xs:px-5 xl:bg-cover xl:px-36 xl:py-6">
              Customize
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex xs:flex-col xl:flex-row-reverse justify-center gap-24 pt-4">
          <div className="flex flex-col justify-around">
            <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
            <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
            <p className="xl:w-500">
              When you need the maximum amount of PC power with innovative,
              high-performance custom cooling, the ORIGIN PC GENESIS desktop
              lays down the foundation to create your dream machine. Designed
              for the gamer and PC enthusiast, the HydroX powered GENESIS is
              professionally built and backed by a 24/7 support team. Choose
              from the latest high end PC hardware with support for the latest
              graphics cards and processors cooled by the latest in HydroX
              cooling technology.
            </p>
          </div>
          <img src={img1} alt="img1" />
        </div>
        <div className="flex xs:flex-col xl:flex-row items-center justify-center gap-24 my-10">
          <div className="flex flex-col justify-around">
            <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
            <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
            <p className="xl:w-500">
              When you need the maximum amount of PC power with innovative,
              high-performance custom cooling, the ORIGIN PC GENESIS desktop
              lays down the foundation to create your dream machine. Designed
              for the gamer and PC enthusiast, the HydroX powered GENESIS is
              professionally built and backed by a 24/7 support team. Choose
              from the latest high end PC hardware with support for the latest
              graphics cards and processors cooled by the latest in HydroX
              cooling technology.
            </p>
          </div>
          <img src={img2} alt="img2" />
        </div>
        <div className="flex xs:flex-col xl:flex-row-reverse justify-center items-center gap-24 px-32 my-10">
          <div>
            <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
            <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
            <p className="xl:w-500">
              When you need the maximum amount of PC power with innovative,
              high-performance custom cooling, the ORIGIN PC GENESIS desktop
              lays down the foundation to create your dream machine. Designed
              for the gamer and PC enthusiast, the HydroX powered GENESIS is
              professionally built and backed by a 24/7 support team. Choose
              from the latest high end PC hardware with support for the latest
              graphics cards and processors cooled by the latest in HydroX
              cooling technology.
            </p>
          </div>
          <img src={img3} alt="img3" />
        </div>
        <div className="flex xs:flex-col xl:flex-row items-center justify-center gap-24 px-32 pb-4">
          <div>
            <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
            <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
            <p className="xl:w-500">
              When you need the maximum amount of PC power with innovative,
              high-performance custom cooling, the ORIGIN PC GENESIS desktop
              lays down the foundation to create your dream machine. Designed
              for the gamer and PC enthusiast, the HydroX powered GENESIS is
              professionally built and backed by a 24/7 support team. Choose
              from the latest high end PC hardware with support for the latest
              graphics cards and processors cooled by the latest in HydroX
              cooling technology.
            </p>
          </div>
          <img src={img4} alt="img4" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex flex-col gap-3 bg-stores bg-no-repeat bg-contain bg-center py-10 px-12 text-black"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="size-1/2 mx-auto"
            />
            <hr className="border-2 border-black my-4" />
            <p className="font-bold text-3xl">{store.name}</p>
            <div className="flex gap-4">
              <img src={Phone} alt="Phone" />
              <p>{store.phone}</p>
            </div>
            <div className="flex gap-4">
              <img src={Map} alt="Map" />
              <p>{store.adress}</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-white">
              <button className="flex items-center gap-3 bg-button bg-center bg-contain bg-no-repeat px-12 py-1">
                Call
              </button>
              <button className="flex items-center gap-3 bg-button bg-center bg-contain bg-no-repeat px-12 py-1 ">
                Visit
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SingleProduct;
