import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import products from "../data/PrebuiltPC.json";

const PreBuildContext = React.createContext();

export const useBuildContext = () => useContext(PreBuildContext);
export function PreBuildProvider({ children, initialIndex }) {
  const [index, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem("index");
    return savedIndex ? JSON.parse(savedIndex) : initialIndex || "";
  });

  useEffect(() => {
    localStorage.setItem("index", JSON.stringify(index));
  }, [index]);

  return (
    <PreBuildContext.Provider value={{ index, setIndex, products }}>
      {children}
    </PreBuildContext.Provider>
  );
}

PreBuildProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialIndex: PropTypes.number,
};
