import "./contact-form-styles.scss";
import { useContext } from "react";
import { ContactContext } from "../../../context/contact-context";
import { Modal, ModalTypes } from "../../modal/modal-component";
import { SuccessAnimation } from "../success-animation/success-icon";

export const ContactForm = () => {
  const {
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
  } = useContext(ContactContext);

  return (
    <div className="contact-form">
      <span className="form-warning">Campos em vermelho são obrigatários</span>
      <Modal modalType={ModalTypes.MODAL_LIGHT}>
        <form action="" onSubmit={handleSubmitForm}>
          <div className="contact-info">
            <input
              title="Insira seu nome"
              value={contactName}
              type="text"
              required
              placeholder=" "
              maxLength="80"
              onChange={(e) => setContactName(e.target.value)}
            />
            <label>Nome</label>
          </div>
          <div className="contact-info">
            <input
              title="Insira um endereço de email válido"
              value={contactEmail}
              type="email"
              required
              placeholder=" "
              maxLength="80"
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          <div className="contact-info">
            <input
              title="Insira um número de celular válido para contato"
              value={contactPhone}
              pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
              type="tel"
              placeholder=" "
              maxLength="15"
              onChange={handlePhoneChange}
            />
            <label>Celular</label>
          </div>
          <div className="contact-info">
            <input
              title="Insira o assunto que deseja tratar"
              value={contactSubject}
              type="text"
              placeholder=" "
              maxLength="80"
              onChange={(e) => setContactSubject(e.target.value)}
            />
            <label>Assunto</label>
          </div>
          <div className="contact-info">
            <textarea
              title="Insira sua mensagem"
              value={contactMessage}
              rows="5"
              placeholder=" "
              maxLength="3000"
              onChange={(e) => setContactMessage(e.target.value)}
            />
            <label>Mensagem</label>
          </div>

          <div className="submit-contact">
            {formSent ? (
              <SuccessAnimation />
            ) : (
              <button type="submit" className="button">
                Enviar
              </button>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
};
