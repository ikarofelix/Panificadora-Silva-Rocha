import { useContext } from "react";
import { ServicesContext } from "../../../context/services-context";

import { Modal, ModalTypes } from "../../modal/modal-component";

export const ServiceDescription = () => {
  const { currentService, ServicesList } = useContext(ServicesContext);

  return (
    <Modal modalType={ModalTypes.MODAL_LIGHT} className="services-description">
      {ServicesList.find((service) => service.title === currentService)
        .description.split("\n")
        .map((paragraph, index) => {
          return index === 0 ? (
            <p className="services-description-title" key={index}>
              {paragraph}
            </p>
          ) : (
            <p className="services-description-text" key={index}>
              {paragraph}
            </p>
          );
        })}
    </Modal>
  );
};
