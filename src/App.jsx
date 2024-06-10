import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { PreBuildProvider } from "./context/PreBuildContext";
import { ProductProvider } from "./context/ProductContext";
import { NewsProvider } from "./context/NewsContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const Providers = ({ children }) => (
  <CartProvider>
    <ProductProvider>
      <NewsProvider>
        <PreBuildProvider>{children}</PreBuildProvider>
      </NewsProvider>
    </ProductProvider>
  </CartProvider>
);

function App() {
  return (
    <Providers>
      <Navbar />
      <Outlet />
      <Footer />
    </Providers>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
