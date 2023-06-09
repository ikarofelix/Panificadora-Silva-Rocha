import "./clients-styles.scss";
import { Modal, ModalTypes } from "../../modal/modal-component";
import SaoGoncalo from "../../../assets/home-page/sao-goncalo-company.png";
import PorteiraVelha from "../../../assets/home-page/porteira-velha-company.png";
import Sodexo from "../../../assets/home-page/sodexo-company.png";
import GRSA from "../../../assets/home-page/grsa-company.png";

const Clients = [
  {
    id: 1,
    src: SaoGoncalo,
    alt: "Logo Empresa São Gonçalo",
  },
  {
    id: 2,
    src: PorteiraVelha,
    alt: "Logo Empresa Porteira Velha",
  },
  {
    id: 3,
    src: Sodexo,
    alt: "Logo Empresa Sodexo",
  },
  {
    id: 4,
    src: GRSA,
    alt: "Logo Empresa GRSA",
  },
];

export const ClientsComponent = () => (
  <div className="clients-section-container">
    <h1 className="section-title">CLIENTES</h1>
    <div className="clients-container">
      {Clients.map((client) => (
        <Modal modalType={ModalTypes.MODAL_LIGHT} key={client.id}>
          <img className="client-icon" loading="lazy" src={client.src} alt={client.alt} />
        </Modal>
      ))}
    </div>
  </div>
);
