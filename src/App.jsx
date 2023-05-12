import "./App.css";
import { Header } from "./components/header/header-component";
import { Home } from "./routes/home-route";
import { Footer } from "./components/footer/footer-component";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
