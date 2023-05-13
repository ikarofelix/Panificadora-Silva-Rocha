import "./about-styles.scss";
import { CompanyImg } from "../../assets/about/company-img";
import { Modal, ModalTypes } from "../modal/modal-component";

export const AboutComponent = () => (
  <div className="about-container">
    <div className="about-image" title="Sede da Panificadora Silva Rocha">
      <CompanyImg />
    </div>
    <Modal modalType={ModalTypes.MODAL_LIGHT} className="about-text-modal">
      <p className="about-text">
        Fundada em 16/10/1996 (16 de Outubro de 1996), a Panificadora Silva Rocha atua na área de
        panificação com experiência a 20 anos no segmento. Temos técnicos e mão de obra
        especializada, comprometida com o serviço. A nossa empresa está preparada para atender
        clientes de pequeno, médio e grande porte, oferecendo sempre produtos de excelente qualidade
        e economia para servir: Coffee break, lanche, bolo e desjejum. Podemos contribuir de forma
        positiva para sua empresa, com serviços realizados de acordo com as normas de qualidade e o
        atendimento que prezamos dentro da nossa empresa com organização.
        <br />
        <br />
        Buscamos estabelecer uma relação transparente com os nosso clientes, oferecendo suporte
        através do atendimento diferenciado em horário comercial de segunda a sexta e atendimento
        emergencial aos finais de semana e feriados, através do telefone de contato:
        <a href="tel:+553135926093"> (31) 3592-6093</a>
      </p>
    </Modal>
  </div>
);
