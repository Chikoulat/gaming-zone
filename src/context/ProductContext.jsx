import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import products from "../data/Products.json";

const ProductContext = React.createContext();

export const useProductContext = () => useContext(ProductContext);

export function ProductProvider({ children }) {
  const [productIndex, setProductIndex] = useState(
    parseInt(localStorage.getItem("productIndex")) || 1
  );

  useEffect(() => {
    localStorage.setItem("productIndex", productIndex);
  }, [productIndex]);
  return (
    <ProductContext.Provider
      value={{ productIndex, setProductIndex, products }}
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
