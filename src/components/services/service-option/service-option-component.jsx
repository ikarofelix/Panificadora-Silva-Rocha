import { useContext } from "react";
import { ServicesContext } from "../../../context/services-context";
import { Modal, ModalTypes } from "../../modal/modal-component";

export const ServiceOption = () => {
  const { currentService, setCurrentService, ServicesList } = useContext(ServicesContext);

  return (
    <Modal modalType={ModalTypes.MODAL_LIGHT} className="services-options">
      {ServicesList.map((service) => (
        <Modal
          key={service.id}
          modalType={
            service.title === currentService ? ModalTypes.MODAL_LIGHT : ModalTypes.MODAL_DARK
          }
          onClick={() => setCurrentService(service.title)}
          className="service-option"
        >
          <span className="service-option-title">{service.title}</span>
        </Modal>
      ))}
    </Modal>
  );
};
