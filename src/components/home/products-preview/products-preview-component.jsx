import "./products-preview-styles.scss";
import { Modal, ModalTypes } from "../../modal/modal-component";
import { ButtonComponent } from "../../button/button-component";

const ProductsGroup = [
  {
    id: 1,
    title: "UNIDADES",
    src: "./src/assets/home-page/products-unity-image.jpg",
    alt: "Pães de sal em uma caixa",
  },
  {
    id: 2,
    title: "EMBALADOS",
    src: "./src/assets/home-page/products-quantity-image.jpg",
    alt: "Pães de forma embalados dentro de uma caixa",
  },
];

export const ProductsPreviewComponent = () => (
  <div className="products-section-container">
    <h1 className="section-title">PRODUTOS</h1>
    <div className="products-container">
      {ProductsGroup.map((product) => (
        <Modal
          modalType={ModalTypes.MODAL_DARK}
          className="product-modal-container"
          key={product.id}
        >
          <Modal modalType={ModalTypes.MODAL_LIGHT} className="product-modal">
            <img className="product-image" loading="lazy" src={product.src} alt={product.alt} />
          </Modal>
          <ButtonComponent href={`/products#${product.title.toLowerCase()}`}>
            {product.title}
          </ButtonComponent>
        </Modal>
      ))}
    </div>
  </div>
);
