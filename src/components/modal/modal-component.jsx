import "./modal-styles.scss";

export const ModalTypes = {
  MODAL_LIGHT: "modal-light",
  MODAL_DARK: "modal-dark",
};

export const Modal = ({ modalType, className, children, ...otherProps }) => {
  return (
    <div {...otherProps} className={`modal ${modalType} ${className}`}>
      {children}
    </div>
  );
};
