import { ContactForm } from "../components/contact/contact-form/contact-form-component";

import { ContactProvider } from "../context/contact-context";

export const Contact = () => {
  return (
    <ContactProvider>
      <div className="contact-route">
        <ContactForm />
      </div>
    </ContactProvider>
  );
};
