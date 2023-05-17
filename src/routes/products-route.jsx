import { ProductComponent } from "../components/products/product-component";
import { useEffect } from "react";

const UnityItems = [
  {
    id: 1,
    title: "Pão de Sal",
    image:
      "https://www.otempo.com.br/image/contentid/policy:1.1739104:1526900973/image-image-jpg.jpg",
    alt: "Pão de Sal",
    description: "Delicioso pão de sal fresquinho todos os dias.",
  },
  {
    id: 2,
    title: "Croissant",
    image:
      "https://www.sabornamesa.com.br/media/k2/items/cache/a111f23c16ea3f29e72a482eced3b5eb_L.jpg",
    alt: "Croissant",
    description: "Croissant crocante e macio, perfeito para o café da manhã.",
  },
  {
    id: 3,
    title: "Bolo de Chocolate",
    image:
      "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/b6a911547d2a4fa622501fbea4a8e3ce.jpg?itok=MzpRtYfi",
    alt: "Bolo de Chocolate",
    description: "Bolo de chocolate irresistível, uma explosão de sabor.",
  },
  {
    id: 4,
    title: "Pão Francês",
    image:
      "https://receitinhas.com.br/wp-content/uploads/2017/06/1220_Pa%CC%83o_de_sal-730x365.jpeg",
    alt: "Pão Francês",
    description: "O tradicional pão francês, sempre quentinho e crocante.",
  },
  {
    id: 5,
    title: "Torta de Morango",
    image:
      "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/efbe0e7c5f30121a83f2565fc97e0b07.jpg",
    alt: "Torta de Morango",
    description: "Torta de morango fresca e deliciosa, perfeita para sobremesa.",
  },
  {
    id: 6,
    title: "Pão Integral",
    image: "https://i.pinimg.com/736x/36/0e/3d/360e3d2fc5524e725ea5c15e8a2cf796--pao-fresco.jpg",
    alt: "Pão Integral",
    description: "Pão integral saudável e nutritivo, ideal para uma alimentação equilibrada.",
  },
  {
    id: 7,
    title: "Cupcake de Baunilha",
    image:
      "https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/cupcakebaunilhareceitacompleta.jpg",
    alt: "Cupcake de Baunilha",
    description:
      "Cupcake de baunilha fofo e decorado com glacê, uma delícia para qualquer ocasião.",
  },
  {
    id: 8,
    title: "Pão de Queijo",
    image:
      "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
    alt: "Pão de Queijo",
    description: "Pão de queijo quentinho e saboroso, um clássico da culinária brasileira.",
  },
];

const PackagedItems = [
  {
    id: 9,
    title: "Pão de Forma Integral",
    image: "https://meupaocaseiro.com.br/wp-content/uploads/2022/06/pao-de-forma-integral.jpg",
    alt: "Pão de Forma Integral",
    description: "Pão de forma integral, rico em fibras e perfeito para sanduíches saudáveis.",
  },
  {
    id: 10,
    title: "Biscoitos Sortidos",
    image:
      "https://i0.wp.com/plusber.com/wp-content/uploads/2021/08/biscoitos.png?fit=537%2C337&ssl=1",
    alt: "Biscoitos Sortidos",
    description: "Caixa de biscoitos sortidos, com uma variedade de sabores para agradar a todos.",
  },
  {
    id: 11,
    title: "Pão de Queijo Congelado",
    image:
      "https://imagens.mfrural.com.br/mfrural-produtos-us/199669-304240-1640637-pao-de-queijo-congelado-e-pao-de-queijo-recheado-congelado.jpg",
    alt: "Pão de Queijo Congelado",
    description:
      "Pacote de pães de queijo congelados, prontos para assar e saborear a qualquer momento.",
  },
  {
    id: 12,
    title: "Cesta de Café da Manhã",
    image: "https://cdn.awsli.com.br/600x450/1763/1763247/produto/117182396/703ab20d5a.jpg",
    alt: "Cesta de Café da Manhã",
    description:
      "Cesta de café da manhã com uma seleção especial de produtos frescos e deliciosos.",
  },
  {
    id: 13,
    title: "Pão Integral com Grãos",
    image:
      "https://guiadacozinha.com.br/wp-content/uploads/2019/10/pao-integral-7-graos-sem-sovar.jpg",
    alt: "Pão Integral com Grãos",
    description: "Pão integral com grãos selecionados, uma opção saudável e nutritiva.",
  },
  {
    id: 14,
    title: "Bolachas Recheadas",
    image:
      "https://confeitando.com.br/wp-content/uploads/2019/09/bolacha_recheada_chocolate_receita-800x954.jpg",
    alt: "Bolachas Recheadas",
    description:
      "Caixa de bolachas recheadas em diversos sabores, perfeitas para um lanche gostoso.",
  },
  {
    id: 15,
    title: "Pão de Mel",
    image:
      "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/a7e0cd2ad28375c69f8b96c7dfc91645.jpg",
    alt: "Pão de Mel",
    description: "Deliciosos pães de mel, com recheio de doce de leite e cobertura de chocolate.",
  },
  {
    id: 16,
    title: "Bolo Embalado",
    image: "https://i.pinimg.com/originals/86/70/0b/86700b3efa3a36bcbf0241c04322da6b.jpg",
    alt: "Bolo Embalado",
    description: "Bolo embalado individualmente, perfeito para levar como lanche ou sobremesa.",
  },
];

export const Products = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="products-route">
      <div id="unidades" className="products-items-container">
        <h1 className="section-title">Produtos unitários</h1>
        <div className="products-items">
          {UnityItems.map((item) => (
            <ProductComponent key={item.id} product={item} />
          ))}
        </div>
      </div>
      <div id="embalados" className="products-items-container">
        <h1 className="section-title">Produtos embalados</h1>
        <div className="products-items">
          {PackagedItems.map((item) => (
            <ProductComponent key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
