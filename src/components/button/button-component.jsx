import "./button-styles.scss";

export const ButtonComponent = ({ children, ...otherProps }) => (
  <a {...otherProps} className="button">
    {children}
  </a>
);
