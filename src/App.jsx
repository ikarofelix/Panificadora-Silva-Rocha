import "./App.scss";
import { Header } from "./components/header/header-component";
import { Footer } from "./components/footer/footer-component";
import { Home } from "./routes/home-route";
import { Services } from "./routes/services-route";
import { Products } from "./routes/products-route";
import { Contact } from "./routes/contact-route";
import { About } from "./routes/about-route";
import { Error404 } from "./routes/error-404";

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
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
