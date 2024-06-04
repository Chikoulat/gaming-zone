import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import products from "../data/PrebuiltPC.json";

const PreBuildContext = React.createContext();

export const useBuildContext = () => useContext(PreBuildContext);

export function PreBuildProvider({ children }) {
  const [index, setIndex] = useState(
    parseInt(localStorage.getItem("productIndex")) || 1
  );

  useEffect(() => {
    localStorage.setItem("productIndex", index);
  }, [index]);

  return (
    <PreBuildContext.Provider value={{ index, setIndex, products }}>
      {children}
    </PreBuildContext.Provider>
  );
}

PreBuildProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
