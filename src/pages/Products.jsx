import { useState, useMemo } from "react";
import productParts from "../data/Products.json";
import DOMPurify from "dompurify";
import CPU from "../assets/products/CPU.jpg";
import GPU from "../assets/products/GPU.jpg";
import RAM from "../assets/products/ram.jpg";
import drive from "../assets/products/drive.jpg";
import motherboard from "../assets/products/Motherboard.jpg";
import PSU from "../assets/products/PSU.jpg";
import cooler from "../assets/products/CPU fan.jpg";
import monitor from "../assets/products/monitor.jpg";
import cases from "../assets/products/case.jpg";
import { Filters } from "../service/MultiFilter.js";

const itemsPerPage = 8;

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

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [productPrice, setProductPrice] = useState();
  const [openFilter, setOpenFilter] = useState(false);
  const [openCat, setOpenCat] = useState(false);

  const updatedProducts = useMemo(() => {
    return productParts.map((item, index) => ({
      ...item,
      config: index % 2 === 0,
      new: index % 2 !== 0,
    }));
  }, []);

  const maxPrices = productParts.reduce((acc, product) => {
    if (!acc[product.category] || product.price > acc[product.category]) {
      acc[product.category] = product.price;
    }
    return acc;
  }, {});

  const filteredProducts = useMemo(() => {
    let products = updatedProducts;

    if (selectedCategory && selectedCategory !== "All") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    } else {
      products = [...products].sort(() => Math.random() - 0.5);
    }

    if (productPrice) {
      products = products.filter((product) => product.price <= productPrice);
    }

    return products.filter((product) => {
      const filters = selectedFilters[product.category] || {};
      return Object.keys(filters).every((key) => {
        if (filters[key] === "") return true;
        return (
          product.filter[key] &&
          product.filter[key].toString().includes(filters[key])
        );
      });
    });
  }, [selectedCategory, selectedFilters, updatedProducts, productPrice]);

  const searchedProducts = useMemo(() => {
    return filteredProducts.filter((product) =>
      searchTerm
        .toLowerCase()
        .split(" ")
        .every((term) => product.name.toLowerCase().includes(term))
    );
  }, [searchTerm, filteredProducts]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    return searchedProducts.slice(start, end);
  }, [currentPage, searchedProducts]);

  const totalPages = useMemo(() => {
    return Math.ceil(searchedProducts.length / itemsPerPage);
  }, [searchedProducts]);

  const uniqueCategories = useMemo(() => {
    return [
      "All",
      ...new Set(updatedProducts.map((product) => product.category)),
    ];
  }, [updatedProducts]);

  const handleSearch = () => {
    const sanitizedInput = DOMPurify.sanitize(inputValue);
    setSearchTerm(sanitizedInput);
    setCurrentPage(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setSelectedFilters({});
    setCurrentPage(1);
  };

  const handleFilterChange = (category, filterKey, value) => {
    if (typeof category === "object" && category !== null) {
      setSelectedFilters({});
    } else {
      if (value !== "All") {
        const parsedValue = isNaN(value) ? value : Number(value);
        setSelectedFilters((prev) => ({
          ...prev,
          [category]: {
            ...prev[category],
            [filterKey]: parsedValue,
          },
        }));
        setCurrentPage(1);
      } else {
        setSelectedFilters((prev) => {
          const updatedFilters = { ...prev };
          delete updatedFilters[category][filterKey];
          return updatedFilters;
        });
      }
    }
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setProductPrice(value);
  };

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const toggleCat = () => {
    setOpenCat(!openCat);
  };

  return (
    <section className="text-white">
      <div className="bg-builds bg-cover bg-no-repeat bg-bottom xl:py-12">
        <h1 className="text-center py-8 xs:text-3xl xl:text-7xl">PRODUCTS</h1>
      </div>
      <div className="bg-search bg-no-repeat bg-center flex justify-center items-center py-12 my-2 xs:gap-6 xl:gap-3">
        <div
          className={`${
            selectedCategory === "All" ? "hidden" : "block"
          } xl:hidden`}
        >
          <button onClick={toggleFilter} className="bg-">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACC0lEQVR4nO1XO2tUURCeRFERUXyh0bgzd/fM3HhR0CKNjVaCWNta+QfEwsIfoJV2WgkLYpPY2CSFSFBhszO5Kwpxiy0sLBRBFEQsArIy+wjxlY3evbsW+8E0584538fMnDlzAf4HLMDpzYY8oyiPBmFGcn8GYNOqgFRkn5E0DaVsyDfyNSk7l3OuCtBDU3t9sUrhbN7Rdo5fBDgUedaI39VKpQA5wc92DiV50AQY++HjcpJsUeI5RXlTo6PYb/LKJB824tdeA40Qtv7WKZ2Y2G4oTwy5oZgc7Bf58xD2G0ndSCrLSbJjXedqCDuNODXkl5XJZE9W8rRY3KUkNUN58axwfPfGNknrVrwyksWeitc7px3Rpx7RxSg68E85M+LHC4jb/pbca8qI5zPVVHoklJT4rSI/9Ga10X3eZLyxGcp7oziGLLDi1DEj/qDI95oA4738/Xop8V0l+aTIJzKRd2GRTBvyZyO+DT2gxLdavpFMQz9hhfiUEn9xgj/6EF83kq9LGJ+BPFAt8HlFXvHwGvHHtdYJ+Yr7QJ4wbygoZY3iC2ut88jUcyV3OMkSymX4Cb42EmCjFNCoCGV0DeuQN4ykrshXhtaIFHm2/SjJVR86Bi6gCTBWJb7YGjaQG4ZybqACuvCB1YjvKMm3TlRuDlRAF4bhpI/brV+7YQiAdlrGNZJLinxtKAKy4DvzvGupShJJJwAAAABJRU5ErkJggg==" />
          </button>

          {openFilter &&
            selectedCategory &&
            selectedCategory !== "All" &&
            Filters[selectedCategory] && (
              <div className="flex flex-col justify-center gap-4 pl-72">
                <button
                  onClick={() => setOpenFilter(false)}
                  className="right-0"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO2YWw7CIBBFuxIhKNQa97+Fq6hr8EPjcxGa+vjQWkPtQKdmbtJfOCdQGCbLJBKJRCIJzGwwmsAUNouU1XA4KueIMvhSufFc253Xdg9lC+rxYQrrtdt65Y7ejKeR4N3l/tFK4An/HJ9SogpPK4F3eGoJqFx7bddVgfYSqIOnXuUYEsngY0gkh6eU6AyeQqJz+DYSbOB/kWAH30SCLXyQhHInr9yBLXzYSjCHby7BEP5Vom6/u8tc2TNb+DKPH3bfSwF8PW2YbyEEwzOUwPdz/rSo3VIMJBBwSZXvXK/chp0EGtyw7CTwQ3nARgItapvOJUBQmN0kOnmNGbqqMv172NBPmK4jYeJNhBQSXud5rxtbnyV61FqsSvSwuZuqvQ5T2GjtdYlEIpH8Za5ttWFl6fqAQAAAAABJRU5ErkJggg=="
                    alt="close"
                  />
                </button>
                {Object.keys(Filters[selectedCategory]).map((filterKey) => (
                  <div key={filterKey} className="flex gap-12">
                    <label className="w-full">{filterKey}</label>
                    <select
                      className="text-black w-full"
                      value={selectedFilters[selectedCategory]?.[filterKey]}
                      onChange={(e) =>
                        handleFilterChange(
                          selectedCategory,
                          filterKey,
                          e.target.value
                        )
                      }
                    >
                      <option value="All">All</option>
                      {Filters[selectedCategory][filterKey].map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="xs:text-xs xl:text-base"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                <div className="flex flex-col gap-4">
                  <label className="w-5/6 ">Price</label>
                  <input
                    type="text"
                    value={productPrice}
                    onChange={handlePriceChange}
                    className="text-black"
                  />
                  <div className="flex gap-2">
                    <p>0</p>
                    <input
                      type="range"
                      min="0"
                      max={maxPrices[selectedCategory]}
                      value={productPrice}
                      onChange={handlePriceChange}
                    />
                    <p>{maxPrices[selectedCategory]}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const resetFilters = { ...selectedFilters };
                      for (const category in resetFilters) {
                        for (const filterKey in resetFilters[category]) {
                          resetFilters[category][filterKey] = "";
                        }
                      }
                      setSelectedFilters(resetFilters);
                      setProductPrice(0);
                    }}
                    className="bg-button bg-center bg-no-repeat bg-contain px-12 py-2"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
        </div>

        <input
          className="h-8 text-black xl:w-1/3"
          type="text"
          placeholder="Find your product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch} className="text-white">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO1YS08UQRAuNb4fJw1BWaqHneqBRYmRxOjFEwdNvBD1oDHRePPi48iFcNJ4U/8AicZEUcLVk4bEsNvNrqKCBg5qjN64wEVNWNcUsE4PDC6Pnn3gfMledne+/qq6quvrAYgRI0aMdYGslHt1U/NBhcnjOdGCE667FaoZQw0N2zNI5zXSE41ySgtZCPm8UUg9KpFshWpBAWCjcrxzWtCnJUQv+ighf2ukvmzCTVa+TFAOhgulSYX0Xgs5pJC+KKRfIf/7oR15sTLiUTaHZP2bRuri3xb9v75+h0LqVEL2z+5AcEdulVX8a9fdt0D8jBaym0Uu5/lhh45qlCNmEMMob0avHAD6ADYFygbllEJ5cqU8o6nULi1oIJAEhzogamj0rpiLKsc9vVqubHv7Zi3ohZ8MGufvIMqjUqH8agTQbakcJ//2A8qrEBUUuhf8xqPvy635UuD6N5LyAaKCQnpsbHeXLd6XiNs00rQfhOeBbRQANpgTNuyoXAt4sGn/YLgBkQwtY0jZ5leCrhkB3LfND2lHthnl89Y2/7DjnfUbmZ7a5ocMuseMRkvb5udZov0EPbfND2n0hFFCn6OcLwrpgW1+YD9f9DBszEbq2nba5Gc/pP0duANRgP28kaVOm9zzzrUwy72G6V5qkR7DQfZb5D1sTOKfGdfdY4s7uFAi2aqEzBcvJewqbfBy0xoHRK8NzqUXE/KRcV6PsKtcC58SdMnY1Xy2yTsEUSLTKJ3Zm5R/Ig2MplJbVsOlBJ3gkjH66i6UA3wNDNzEUA6yq1xp5gPihcynm1ooOtX/Ovbm7QW7SjZmJRs2WPNGImg8l/D2ly2IeRs8s0DE9Jwx867rRveMRnlKIV3Wgm4rpHchbyjyFQ1CO9TBiy73lYopnGuey2bR81jmIPgayDcpJehjSeFzdd/L5rD4PIuteBBF8GWE/bxGeU8J+YzrXSE9ZHvAE/aV5+2GEFRVEKtF2nHqtJBjC4KYGGqgA1ArSMdBVAnS62EncmGNLeRYqWFZ9UFkG5NHoJaQ4yD8chqtqR0ogkVz5mtSfIwYMf4j/AFa+K9S9sDcigAAAABJRU5ErkJggg=="
            alt="search"
          />
        </button>
        <div className="xl:hidden">
          <button onClick={toggleCat}>Categories</button>
          {openCat && (
            <div>
              <div className="text-xl grid justify-center gap-6 mr-60 my-8">
                {uniqueCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      handleCategoryChange(category);
                      setSearchTerm("");
                      setOpenCat(false);
                    }}
                    className="bg-button bg-cover bg-center bg-no-repeat px-20 hover:bg-buttonC font-sans"
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setOpenCat(false)}
                className="bg-button bg-center bg-no-repeat bg-contain px-12 py-2"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="text-xl justify-center gap-6 xs:hidden xl:flex xl:flex-wrap">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              handleCategoryChange(category);
              setSearchTerm("");
            }}
            className="bg-button bg-cover bg-center bg-no-repeat xs:px-10 xl:px-20 xl:py-2 hover:bg-buttonC"
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="my-16 xs:mx-6 xl:mx-2 xl:flex xl:justify-center xl:gap-12">
        {selectedCategory &&
          selectedCategory !== "All" &&
          Filters[selectedCategory] && (
            <div className="flex flex-col justify-center xs:gap-4 xl:gap-8 ">
              <h2 className="text-2xl text-gzred">
                {selectedCategory.toUpperCase()}
              </h2>
              {Object.keys(Filters[selectedCategory]).map((filterKey) => (
                <div key={filterKey} className="xs:hidden xl:flex gap-4">
                  <label className="w-5/6">{filterKey}</label>
                  <select
                    className="text-black w-40"
                    value={selectedFilters[selectedCategory]?.[filterKey]}
                    onChange={(e) =>
                      handleFilterChange(
                        selectedCategory,
                        filterKey,
                        e.target.value
                      )
                    }
                  >
                    <option value="All">All</option>
                    {Filters[selectedCategory][filterKey].map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="xs:text-xs xl:text-base"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <div className="xs:hidden xl:flex flex-col gap-4">
                <label className="w-5/6 ">Price</label>
                <input
                  type="text"
                  value={productPrice}
                  onChange={handlePriceChange}
                  className="text-black"
                />
                <div className="flex gap-2">
                  <p>0</p>
                  <input
                    type="range"
                    min="0"
                    max={maxPrices[selectedCategory]}
                    value={productPrice}
                    onChange={handlePriceChange}
                  />
                  <p>{maxPrices[selectedCategory]}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const resetFilters = { ...selectedFilters };
                    for (const category in resetFilters) {
                      for (const filterKey in resetFilters[category]) {
                        resetFilters[category][filterKey] = "";
                      }
                    }
                    setSelectedFilters(resetFilters);
                    setProductPrice(0);
                  }}
                  className="bg-button bg-center bg-no-repeat bg-contain px-12 py-2"
                >
                  Reset
                </button>
              </div>
            </div>
          )}

        <div className="grid xs:grid-cols-2 xl:grid-cols-4 xl:w-3/4 justify-center xs:gap-3 xl:gap-6">
          {paginatedProducts.map((product) => (
            <article
              key={product.id}
              className="bg-newProduct bg-center bg-no-repeat bg-cover py-12 h-full"
            >
              {product.new && (
                <div className="bg-new bg-no-repeat size-24 absolute xl:bg-top" />
              )}
              <img
                src={categoryMap[product.category]}
                alt={product.category}
                className="xl:w-5/6 mx-auto h-40 object-cover"
              />
              <h5 className=" text-center h-16 my-2">{product.name}</h5>
              <div className="flex flex-col items-center xs:gap-8 xl:gap-4 mx-2">
                <p>{product.category.toUpperCase()}</p>
                <p className="text-sm xs:h-52 xl:h-32">{product.description}</p>
                <p className="text-gzred">Price: {product.price} dz</p>
                <button className=" xs:px-12 xl:x-16 mt-2 bg-button bg-center bg-no-repeat bg-contain py-4">
                  {product.config ? "Config" : "Buy"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="bg-builds bg-cover bg-center bg-no-repeat flex justify-center m-4 py-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVR4nO3WzQkCQRAF4cpBbTf/RAQRPIni+hOOsjAHM/D1Ut+lr/Ooy4CkDvbABTjSfMQT+ABnmipgHiNewERDjkhhiRSWSGGJFJZIYYkUlkhRfsVD1BpKLK5jxB3Y0dhtDFnuhsYKePyM2dJYOSZUWSZUWSZUWSaUZVJZJpVlUlkm1arKTMB7jDnR3DSKHP79EGmtvp0Yc4+C4xbkAAAAAElFTkSuQmCC"
            alt="previous"
          />
        </button>
        <span className="px-4 py-4 mx-1 bg-black bg-center text-center text-xl">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="
            alt="next"
          />
        </button>
      </div>
    </section>
  );
}

export default Products;
