import { ServicesComponent } from "../components/services/services-component";
import { ServicesProvider } from "../context/services-context";

export const Services = () => (
  <ServicesProvider>
    <ServicesComponent />
  </ServicesProvider>
);
