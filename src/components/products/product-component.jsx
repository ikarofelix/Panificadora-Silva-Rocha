import "./product-styles.scss";
import { Modal, ModalTypes } from "../modal/modal-component";

export const ProductComponent = ({ product }) => (
  <div className="product-item">
    <Modal modalType={ModalTypes.MODAL_LIGHT} className="modal-product">
      <h2 className="product-title">{product.title}</h2>
      <div className="product-image-container">
        <img loading="lazy" className="product-image" src={product.image} alt={product.alt} />
      </div>
      <p className="product-description">{product.description}</p>
    </Modal>
  </div>
);
