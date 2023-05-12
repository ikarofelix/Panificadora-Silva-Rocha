import "./middle-section-styles.scss";
import { CompanyInfoComponent } from "../company-info/company-info-component";
import { ClientsComponent } from "../clients/clients-component";
import { ProductsPreviewComponent } from "../products-preview/products-preview-component";

export const MiddleSection = () => (
  <div className="middle-section">
    <CompanyInfoComponent />
    <ClientsComponent />
    <ProductsPreviewComponent />
  </div>
);
