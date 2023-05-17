import { createContext, useState } from "react";

export const ContactContext = createContext({
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  contactSubject: "",
  contactMessage: "",
  formSent: false,
});

export const ContactProvider = ({ children }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
      let formattedNumber = "(" + match[1] + ") " + match[2];
      if (match[3]) {
        formattedNumber += "-" + match[3];
      }
      return formattedNumber;
    }
    return phoneNumber;
  };

  const resetForm = () => {
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setContactSubject("");
    setContactMessage("");
  };

  const handlePhoneChange = (e) => {
    contactPhone === "() "
      ? setContactPhone("")
      : setContactPhone(formatPhoneNumber(e.target.value));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      resetForm();
      setFormSent(false);
    }, 4000);
  };

  const value = {
    contactName,
    setContactName,
    contactEmail,
    setContactEmail,
    contactPhone,
    contactSubject,
    setContactSubject,
    contactMessage,
    setContactMessage,
    formSent,
    handlePhoneChange,
    handleSubmitForm,
  };

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
};
