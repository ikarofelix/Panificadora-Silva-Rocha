import "./App.css";
import { Header } from "./components/header/header-component";
import { Footer } from "./components/footer/footer-component";
import { Home } from "./routes/home-route";
import { Products } from "./routes/products-route";
import { About } from "./routes/about-route";

import { Routes, Route } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
