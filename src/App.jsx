import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { PreBuildProvider } from "./context/PreBuildContext";

function App() {
  return (
    <PreBuildProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </PreBuildProvider>
  );
}

export default App;
