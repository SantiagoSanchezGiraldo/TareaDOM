import { bannerSection } from "./secciones/BannerSection.js";
import { mainSection } from "./secciones/MainSection.js";
import { footerSection } from "./secciones/FooterSection.js";


document.body.appendChild(bannerSection('Bienvenido','Nuestra pagina de varias cosas','asets/bienvenido.jpg'));
document.body.appendChild(mainSection('Escribanos que pinesas de nuestra pagina','Enviar','Tu comentario fue enviado'));
footerSection();