import "./main-section-styles.scss";
import { MainImgHomePage } from "../../../assets/home-page/main-img";
import { ButtonComponent } from "../../button/button-component";

export const MainSection = () => (
  <div className="main-section">
    <div className="main-info">
      <span className="main-line-vector"></span>
      <h1 className="main-title">
        Panificadora <span className="main-subtitle">SILVA ROCHA</span>
      </h1>
      <p className="main-text">
        Somos uma indústria alimentícia que trabalha com toda a linha de panificação para atender a
        demanda de nossos mais variados clientes.
      </p>
      <ButtonComponent>SOLICITE UM ORÇAMENTO</ButtonComponent>
    </div>
    <div className="main-img" title="Image by @Freepik">
      <MainImgHomePage />
    </div>
  </div>
);
