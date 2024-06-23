import { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";
import { useBuilderContext } from "../context/BuilderContext.jsx";
import BuilderItem from "../components/builder/BuilderItem.jsx";

function Builder() {
  const [getCPU, setGetCPU] = useState("");
  const { products } = useProductContext();
  const { addBuilderToCart } = useCartContext();
  const {
    selectCase,
    selectCpu,
    selectGpu,
    selectMobo,
    selectPsu,
    selectRam,
    selectStorage,
    selectCooler,
    handleCase,
    handleCpu,
    handleGpu,
    handleMobo,
    handlePsu,
    handleRam,
    handleStorage,
    handleCooler,
    clearCase,
    clearCpu,
    clearGpu,
    clearMobo,
    clearPsu,
    clearRam,
    clearStorage,
    clearCooler,
  } = useBuilderContext();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategory = (e, category) => {
    const selected = category || e.target.value;
    setSelectedCategory(selected);
  };

  const handleItem = (product) => {
    switch (product.category) {
      case "motherboard":
        handleMobo(product);
        break;
      case "CPU":
        handleCpu(product);
        break;
      case "GPU":
        handleGpu(product);
        break;
      case "power supply":
        handlePsu(product);
        break;
      case "case":
        handleCase(product);
        break;
      case "storage":
        handleStorage(product);
        break;
      case "RAM":
        handleRam(product);
        break;
      case "cooler":
        handleCooler(product);
        break;
      default:
        break;
    }
  };

  const handleClear = (clearFunc, category) => {
    clearFunc();
    handleCategory(null, category);
  };

  const handleCPU = (e) => {
    setGetCPU(e.target.value);
    setSelectedCategory("motherboard");
  };

  const builderItems = [
    { item: selectMobo, category: "motherboard", clearFunc: clearMobo },
    { item: selectCpu, category: "CPU", clearFunc: clearCpu },
    { item: selectGpu, category: "GPU", clearFunc: clearGpu },
    { item: selectRam, category: "RAM", clearFunc: clearRam },
    { item: selectStorage, category: "storage", clearFunc: clearStorage },
    { item: selectCooler, category: "cooler", clearFunc: clearCooler },
    { item: selectPsu, category: "power supply", clearFunc: clearPsu },
    { item: selectCase, category: "case", clearFunc: clearCase },
  ];

  const handleReset = () => {
    builderItems.forEach((item) => item.clearFunc());
  };

  const handleAddAllToCart = () => {
    const itemsToAdd = builderItems
      .filter(({ item }) => item)
      .map(({ item }) => ({ ...item, quantity: 1 }));
    addBuilderToCart(itemsToAdd);
  };

  const totalPrices = builderItems.reduce(
    (total, item) => total + (item.item ? item.item.price : 0),
    0
  );

  return (
    <section className="text-white py-12">
      <h1 className="text-5xl text-center">PC BUILDER</h1>
      <div className="flex justify-center px-52 py-8">
        <div className="bg-amd bg-center bg-no-repeat w-full h-150 flex items-end justify-center">
          <button
            onClick={handleCPU}
            value="AMD"
            className="text-xl bg-redB bg-center bg-no-repeat bg-cover px-12 py-6 relative hover:bg-red hover:px-12 hover:py-6 hover:bg-contain"
          >
            Build
          </button>
        </div>
        <div className="bg-intel bg-center bg-no-repeat w-full h-150 flex items-end justify-center">
          <button
            onClick={handleCPU}
            value="Intel"
            className="text-xl bg-blueB bg-center bg-no-repeat bg-cover px-12 py-6 relative hover:bg-blue hover:px-12 hover:py-6 hover:bg-contain"
          >
            Build
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-4 xl:py-6 xl:px-12">
          {builderItems.map(({ item, category, clearFunc }) => (
            <BuilderItem
              key={category}
              item={item}
              category={category}
              handleClear={() => {
                handleClear(clearFunc, category);
              }}
              handleCategory={handleCategory}
            />
          ))}
          <div className="text-white">
            <p>Total: {totalPrices} dz</p>
            <button onClick={handleAddAllToCart}>Add to cart</button>
            <button onClick={handleReset}>Reset all</button>
          </div>
        </div>

        <div className="px-2">
          {products &&
            selectedCategory !== "All" &&
            products
              .filter((product) => {
                if (product.category.includes(selectedCategory)) {
                  if (selectedCategory === "motherboard") {
                    return product.filter.support === getCPU || getCPU === "";
                  }
                  if (selectedCategory === "CPU") {
                    return product.filter.chipset === getCPU || getCPU === "";
                  }
                  return true;
                }
                return false;
              })
              .map((product) => (
                <article
                  key={product.id}
                  className="bg-newProduct bg-center bg-no-repeat bg-cover py-6 flex items-center justify-between border-b-2 border-b-newred px-10 gap-6"
                >
                  <img
                    src={product.images}
                    alt={product.category}
                    className="h-20 object-cover"
                  />
                  <h5 className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {product.name}
                  </h5>

                  <ul className="flex gap-4 items-center">
                    {Object.values(product.filter)
                      .slice(0, 4)
                      .map((value, index) => (
                        <li
                          key={index}
                          className="border-2 p-2 overflow-hidden overflow-ellipsis whitespace-nowrap"
                        >
                          {value}
                        </li>
                      ))}
                  </ul>
                  <p className="text-gzred">{product.price} dz</p>

                  <button
                    onClick={() => {
                      handleItem(product);
                    }}
                  >
                    Add
                  </button>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Builder;
