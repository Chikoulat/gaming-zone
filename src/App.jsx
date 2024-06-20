import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { PreBuildProvider } from "./context/PreBuildContext";
import { ProductProvider } from "./context/ProductContext";
import { NewsProvider } from "./context/NewsContext";
import { CartProvider } from "./context/CartContext";
import { BuilderProvider } from "./context/BuilderContext";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";

const Providers = ({ children }) => (
  <BuilderProvider>
    <CartProvider>
      <ProductProvider>
        <NewsProvider>
          <PreBuildProvider>{children}</PreBuildProvider>
        </NewsProvider>
      </ProductProvider>
    </CartProvider>
  </BuilderProvider>
);

function App() {
  return (
    <Providers>
      <Navbar />
      <GoUp />
      <Outlet />
      <Footer />
    </Providers>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
