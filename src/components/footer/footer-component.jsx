import "./footer-styles.scss";

const FooterCategories = [
  {
    id: 1,
    title: "EMPRESA TOP OF MIND 2005/2006",
    image: "../../assets/footer/certificate-image.jpg",
    alt: "Certificado Top Of Mind Brazil - 2005/2006",
    href: "https://www.inbrap.com/premios",
  },
  {
    id: 2,
    title: "CONTATO",
    options: [
      {
        text: "(31) 3592-6093",
        href: "tel:+553135926093",
      },
      {
        text: "contato@panificadorasilvarocha.com.br",
        href: "mailto:contato@panificadorasilvarocha.com.br",
      },
      {
        text: "Rua Jovelino Gregório da Silva, 93, Guanabara, Betim - MG",
        href: "https://www.google.com/maps/place/Panificadora+Silva+Rocha+Ltda+-+EPP/@-19.9691934,-44.1410512,15z/data=!4m6!3m5!1s0xa6c13c1c624b97:0xdbed3277708b4dd3!8m2!3d-19.9691934!4d-44.1410512!16s%2Fg%2F1tj6w1ff",
      },
    ],
  },
  {
    id: 3,
    title: "ACESSO",
    options: [
      {
        text: "Câmeras 24h",
        href: "http://pansilvarocha.dyndns.org:8081/",
      },
      {
        text: "Webmail",
        href: "https://webmail.panificadorasilvarocha.com.br/",
      },
      {
        text: "Login",
        href: "https://panificadorasilvarocha.com.br/login/",
      },
    ],
  },
];

/*
If there's an image in the object, renders it
if not it renders the text with its options.
*/
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-categories">
        {FooterCategories.map((category) => {
          const { id, title, image, alt, href, options } = category;

          return (
            <div className="footer-category" key={id}>
              <h1 className="footer-category-title">{title}</h1>
              {image ? (
                <div>
                  <a target="_blank" rel="noopener noreferrer" href={href}>
                    <img className="footer-category-image" src={image} alt={alt} />
                  </a>
                </div>
              ) : (
                <div className="footer-category-text">
                  {options.map((option) => (
                    <div key={options.indexOf(option)} className="footer-link">
                      <a target="_blank" rel="noopener noreferrer" href={option.href}>
                        {option.text}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="footer-rights">
        <h4>© Todos os direitos reservados a Panificadora Silva Rocha LTDA - EPP | 1996 - 2023</h4>
      </div>
    </div>
  );
};
