import "./footer-styles.scss";

const FooterCategories = [
  {
    id: 1,
    title: "EMPRESA TOP OF MIND 2005/2006",
    image: "./src/assets/footer/certificate-image.jpg",
    alt: "Certificado Top Of Mind Brazil - 2005/2006",
  },
  {
    id: 2,
    title: "CONTATO",
    text: [
      "(31) 3592-6093",
      "contato@panificadorasilvarocha.com.br",
      "Rua Jovelino Gregório da Silva, 93, Guanabara, Betim - MG",
    ],
  },
  {
    id: 3,
    title: "ACESSO",
    text: ["Câmeras 24h", "Webmail", "Login"],
  },
];

// If there's an image in the object, renders it, if not it renders the text.
export const Footer = () => (
  <div className="footer">
    <div className="footer-categories">
      {FooterCategories.map((category) => (
        <div className="footer-category">
          <h1 className="footer-category-title">{category.title}</h1>
          {category.image ? (
            <div>
              <img className="footer-category-image" src={category.image} alt={category.alt} />
            </div>
          ) : (
            <div className="footer-category-text">
              {category.text.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="footer-rights">
      <h4>© Todos os direitos reservados a Panificadora Silva Rocha LTDA - EPP | 1996 - 2023</h4>
    </div>
  </div>
);
