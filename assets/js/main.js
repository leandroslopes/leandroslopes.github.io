import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".vue",
  "Vue é um framework JavaScript para construir interfaces de usuário. Ele se baseia em HTML, CSS e JavaScript padrão e fornece um modelo de programação declarativo e baseado em componentes que ajuda a desenvolver interfaces de usuário com eficiência, sejam elas simples ou complexas."
);
hoverChangeDescription(
  ".vuetify",
  "Vuetify é uma biblioteca de interface do usuário Vue com componentes de material lindamente artesanais. Não são necessárias habilidades de design - tudo o que você precisa para criar aplicativos incríveis está ao seu alcance."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe."
);
hoverChangeDescription(
  ".php",
  "PHP é uma linguagem de script de uso geral popular que é especialmente adequada para desenvolvimento web. Rápido, flexível e pragmático, o PHP potencializa tudo, desde seu blog até os sites mais populares do mundo."
);
