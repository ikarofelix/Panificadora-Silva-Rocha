import "../components/error-404/error-404-styles.scss";
import { Error404Icon } from "../assets/error-404/error-404-icon";

export const Error404 = () => {
  return (
    <div className="error-route">
      <div className="error-container">
        <Error404Icon />
      </div>
    </div>
  );
};
