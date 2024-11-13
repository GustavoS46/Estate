import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.jpg'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
  {
    title: "Alphaville Goiás", 
    price: "R$5.890.000",
    location: "Goiânia", 
    image: project_img_1
  },
  {
    title: "Alphaville Flamboyant",
    price: "R$6.750.000",
    location: "Goiânia", 
    image: project_img_2
  },
  {
    title: "Alphaville Flamboyant",
    price: "R$6.390.000",
    location: "Goiânia",
    image: project_img_3
  },
  {
    title: "Alphaville Goiás", 
    price: "R$7.390.000",
    location: "Goiânia", 
    image: project_img_4
  },
  {
    title: "Alphaville Flamboyant",
    price: "R$8.100.000",
    location: "Goiânia", 
    image: project_img_5
  },
];
export const testimonialsData = [
  {
      name: "Guilherme Oliveira",
      title: "Gerente de Marketing", 
      image: profile_img_1,
      alt: "Retrato de Guilherme Oliveira",
      rating: 5,
      text: "Desde o primeiro encontro, eles entenderam exatamente o que eu procurava. Não só me ajudaram a encontrar a propriedade ideal, mas também me deram toda a confiança de que estava fazendo a escolha certa. A atenção ao detalhe foi impecável."
  },
  {
      name: "Henrique Silva",
      title: "Designer de UI/UX",
      image: profile_img_2,
      alt: "Retrato de Henrique Silva",
      rating: 4,
      text: "Fiquei impressionado com a dedicação e o profissionalismo da equipe. Eles realmente se importaram com as minhas necessidades e não apenas com o fechamento de um negócio. A experiência foi ótima, e me senti muito bem apoiado durante todo o processo."
  },
  {
      name: "Pedro Santos",
      title: "Co-Fundador", 
      image: profile_img_3,
      alt: "Retrato de Pedro Santos",
      rating: 5,
      text: "A equipe foi fantástica desde o início. Eles me ajudaram a encontrar a propriedade que atendia a todas as minhas expectativas, e o suporte ao cliente foi excepcional. Fiquei impressionado com a qualidade do serviço prestado e com a capacidade de entender as minhas necessidades."
  }
];
