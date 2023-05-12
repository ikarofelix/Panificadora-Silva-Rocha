import "./company-info-styles.scss";
import { BreadIcon } from "../../../assets/home-page/bread";
import { SupportIcon } from "../../../assets/home-page/support";
import { BudgetIcon } from "../../../assets/home-page/budget";

import { Modal, ModalTypes } from "../../modal/modal-component";

const CompanyInfo = [
  {
    id: 1,
    icon: <BreadIcon />,
    title: "A primeira Indústria de Pães de Betim",
    text: `Fornecimento exclusivo a empresas, escolas e hospitais, 
      entregando qualidade e pontualidade para entregar a melhor experiência 
      diariamente.`,
  },
  {
    id: 2,
    icon: <SupportIcon />,
    title: "Atendimento 24h",
    text: `Além de um atendimento rápido e personalizado, garantimos a sua entrega conforme a sua
    demanda, seja ela de segunda - feira a domingo, incluindo feriados.`,
  },
  {
    id: 3,
    icon: <BudgetIcon />,
    title: "Orçamento",
    text: `Peça agora seu orçamento e descubra como podemos ajudá-lo a fornecer os melhores produtos
    para seus clientes ou funcionários!`,
  },
];

export const CompanyInfoComponent = () => (
  <div className="company-info-container">
    {CompanyInfo.map((info) => (
      <Modal modalType={ModalTypes.MODAL_LIGHT} className="company-info-modal" key={info.id}>
        <div className="company-info-icon">{info.icon}</div>
        <div className="company-info-title">
          <h2>{info.title}</h2>
        </div>
        <div className="company-info-text">{info.text}</div>
      </Modal>
    ))}
  </div>
);
