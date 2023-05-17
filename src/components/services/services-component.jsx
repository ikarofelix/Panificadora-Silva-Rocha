import "./services-styles.scss";
import { Modal, ModalTypes } from "../modal/modal-component";
import { ServiceOption } from "./service-option/service-option-component";
import { ServiceDescription } from "./service-description/service-description-component";

export const ServicesComponent = () => {
  return (
    <div className="services-component">
      <div className="services-header">
        <div className="services-header-holders">
          <Modal modalType={ModalTypes.MODAL_DARK} className="services-header-holder"></Modal>
          <Modal modalType={ModalTypes.MODAL_DARK} className="services-header-holder"></Modal>
        </div>
        <Modal modalType={ModalTypes.MODAL_DARK} className="services-header-modal">
          <p className="services-header-text">
            Trabalhamos com as melhores matérias primas para que possamos oferecer os melhores
            produtos a nossos clientes. Atendemos as maiores empresas locais, nacionais e
            internacionais, oferecemos:
          </p>
        </Modal>
      </div>
      <div className="services-container">
        <ServiceOption />
        <ServiceDescription />
      </div>
    </div>
  );
};
