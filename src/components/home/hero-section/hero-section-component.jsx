import "./hero-section-styles.scss";
import { MainImgHomePage } from "../../../assets/home-page/main-img";
import { ButtonComponent } from "../../button/button-component";

export const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-info">
      <span className="hero-line-vector"></span>
      <h1 className="hero-title">
        Panificadora <span className="hero-subtitle">SILVA ROCHA</span>
      </h1>
      <p className="hero-text">
        Somos uma indústria alimentícia que trabalha com toda a linha de panificação para atender a
        demanda de nossos mais variados clientes.
      </p>
      <ButtonComponent href="/contact">SOLICITE UM ORÇAMENTO</ButtonComponent>
    </div>
    <div className="hero-img" title="Image by @Freepik">
      <MainImgHomePage />
    </div>
  </div>
);
