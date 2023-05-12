import "./button-styles.scss";

export const ButtonComponent = ({ children }) => (
  <a href="https://google.com" className="button">
    {children}
  </a>
);
