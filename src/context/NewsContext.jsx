import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import news from "../data/News.json";

const NewsContext = React.createContext();

export const useNewsContext = () => useContext(NewsContext);

export function NewsProvider({ children }) {
  const [newsIndex, setNewsIndex] = useState(
    parseInt(localStorage.getItem("newsIndex")) || 1
  );

  useEffect(() => {
    localStorage.setItem("newsIndex", newsIndex);
  }, [newsIndex]);

  return (
    <NewsContext.Provider value={{ newsIndex, setNewsIndex, news }}>
      {children}
    </NewsContext.Provider>
  );
}

NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
