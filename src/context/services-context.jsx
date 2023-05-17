import { useState } from "react";
import { createContext } from "react";

const ServicesList = [
  {
    id: 1,
    title: "Desjejum",
    description: `COMECE O DIA COM UM SABOROSO DESJEJUM!
        Nosso serviço de desjejum oferece uma experiência completa e nutritiva para garantir que seus clientes ou funcionários tenham um começo energizante e revigorante pela manhã.
        Preparamos uma variedade de opções cuidadosamente selecionadas para atender a diversos paladares e necessidades alimentares. 
        Oferecemos uma ampla seleção de frutas frescas da estação, cereais nutritivos e crocantes, pães frescos e variados, deliciosos sucos naturais e bebidas quentes, como café e chá.
        Nossa equipe dedicada se preocupa em fornecer alimentos de alta qualidade, preparados com ingredientes frescos e saudáveis.`,
  },
  {
    id: 2,
    title: "Coffee Breaks",
    description: `SURPREENDA SEUS CONVIDADOS COM UM DELICIOSO COFFEE BREAK!
          Nossos serviços são ideais para reuniões corporativas, conferências, seminários e diversos tipos de eventos. Cuidamos de cada detalhe para garantir que seus convidados desfrutem de momentos de pausa repletos de sabor e energia.
          Em nosso menu de Coffee Breaks, oferecemos uma ampla variedade de opções para atender aos diferentes gostos e preferências. Desde lanches simples, como sanduíches e salgadinhos, até refeições completas, como pratos quentes e saladas frescas.
          Nossos alimentos são preparados com ingredientes frescos e de alta qualidade, proporcionando uma experiência gastronômica prazerosa. 
          Temos opções vegetarianas, veganas e sem glúten para acomodar as restrições alimentares dos seus convidados.`,
  },

  {
    id: 3,
    title: "Eventos",
    description: `FAÇA DO SEU EVENTO UM SUCESSO COM NOSSOS SERVIÇOS DE CATERING!
          Estamos prontos para atender eventos de todos os tipos e tamanhos, desde festas corporativas até celebrações particulares.
          Nossa equipe especializada em eventos trabalhará em conjunto com você para criar uma experiência personalizada e memorável. Desde a seleção cuidadosa do cardápio até a decoração temática, estamos comprometidos em transformar seu evento em um momento verdadeiramente especial.
          Nossos chefs talentosos irão preparar pratos deliciosos e sofisticados, utilizando ingredientes frescos e de alta qualidade. 
          Do coquetel de boas-vindas aos pratos principais e sobremesas, cada detalhe será cuidadosamente planejado para impressionar seus convidados.`,
  },
  {
    id: 4,
    title: "Kit Lanches",
    description: `DELICIOSOS E PRÁTICOS KITS LANCHES PERSONALIZADOS.
          Nossos kits lanches são ideais para diversos eventos, como reuniões corporativas, conferências, treinamentos, passeios e muito mais.
          Cuidadosamente elaborados, nossos kits lanches incluem uma variedade de opções saborosas e nutritivas. 
          Você pode escolher entre uma seleção de sanduíches frescos, salgadinhos crocantes, frutas frescas, bebidas refrescantes e doces irresistíveis. 
          Nossos produtos são preparados com ingredientes frescos e de alta qualidade, garantindo sabores excepcionais em cada mordida.`,
  },
  {
    id: 5,
    title: "Kit Café",
    description: `APROVEITE MOMENTOS ESPECIAIS COM O NOSSO KIT CAFÉ.
          Oferecemos uma experiência completa e aconchegante, com uma seleção cuidadosa de cafés gourmet, chás aromáticos e acompanhamentos deliciosos.
          Em nosso Kit Café, você encontrará uma variedade de grãos de café de alta qualidade, cuidadosamente selecionados e torrados para oferecer um sabor rico e envolvente. Nossos chás são provenientes de plantações selecionadas, garantindo aromas irresistíveis e sabores únicos.
          Além das bebidas, preparamos uma seleção de acompanhamentos irresistíveis para complementar a experiência do café. 
          Você poderá desfrutar de biscoitos caseiros, bolos macios e croissants fresquinhos, tudo feito com ingredientes de alta qualidade e preparado com dedicação.`,
  },
  {
    id: 6,
    title: "Bolo de Aniversário",
    description: `CELEBRE OS ANIVERSÁRIOS COM UM BOLO ESPECIAL!
          Nosso serviço de Bolo de Aniversário é dedicado a tornar as comemorações ainda mais doces e memoráveis.
          Nossos bolos de aniversário são feitos com ingredientes frescos e de alta qualidade, combinando sabor e beleza em cada fatia. 
          Temos uma variedade de opções disponíveis para atender aos gostos e preferências de cada aniversariante.
          Seja um bolo clássico de chocolate, um bolo de frutas frescas ou um bolo temático personalizado, nossa equipe de confeiteiros talentosos está pronta para criar a obra-prima perfeita para sua celebração. 
          Cada bolo é cuidadosamente decorado à mão, incorporando elementos especiais que refletem a personalidade e o tema da festa.`,
  },
  {
    id: 7,
    title: "Salgados",
    description: `DELICIE-SE COM NOSSOS SALGADOS IRRESISTÍVEIS!
          Nosso serviço de Salgados é perfeito para adicionar um toque saboroso aos seus eventos e celebrações.
          Preparamos uma variedade de salgadinhos frescos e saborosos, feitos com ingredientes da mais alta qualidade. 
          Nossa seleção inclui coxinhas, empadas, quiches, pastéis, bolinhos de queijo e muito mais.
          Cada salgado é preparado com dedicação e cuidado, garantindo textura crocante por fora e um recheio suculento por dentro. 
          Nosso objetivo é proporcionar uma experiência gastronômica inesquecível, onde cada mordida seja um verdadeiro prazer.`,
  },
];

export const ServicesContext = createContext({
  currentService: ServicesList[0].title,
});

export const ServicesProvider = ({ children }) => {
  const [currentService, setCurrentService] = useState(ServicesList[0].title);

  return (
    <ServicesContext.Provider value={{ currentService, setCurrentService, ServicesList }}>
      {children}
    </ServicesContext.Provider>
  );
};
