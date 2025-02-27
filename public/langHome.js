const translations = {
    "pt": {
        //HEADER
        "title-page": "Tropical Tech - Página Inicial",
        "linkAbout": "Sobre",
        "linkServices": "Serviços",
        "linkCulture": "Cultura",
        "linkContact": "Contato",

        //seção topo
        "titleSectionTopHome": "Inovar é a essência <br> da humanidade.",
        "descSectionTopHome": "Transformar a Consultoria em TI com os melhores <br> talentos humanos é nosso diferêncial.",

        "container-model-one-h2": "Nosso sorriso é o nosso  melhor cumprimento",
        "container-model-one-p": "O bem-estar das nossas pessoas é a nossa prioridade genuína.",

        "linkKnowMoreHome": "saiba mais &rarr;",

        "nameSectionServicesHome": "SERVIÇOS",
        "mainDescServicesHome": "Impulsionamos o seu negócio",
        "mainTextServicesHome": "Com uma equipe dedicada e soluções tecnológicas inovadoras, canalizamos nossa energia e criatividade para impulsionar o seu negócio rumo ao sucesso. Estamos preparados para transformar desafios em oportunidades extraordinárias!",

        "maisDescNumbersHome": "Nossos Numeros",
        "word-clientes-home": "Clientes",
        "horas-formacao": "Horas de formação",

        "nameSectionCultureHome": "CULTURA",
        "mainDescCultureHome": "Cultura Tropical",

        "mainTextCultureHome": "A nossa Cultura está assente em pilares como a proximidade, o bem-estar, o trabalho em equipa, o feedback constante e a aprendizagem contínua.",

        "linkCultureHome:": "Cultura &rarr;",

        "nameSectionNovidadesHome": "Novidades",
        "mainDescNovidadeHome": "Fique por dentro do mundo Tech",
        "mainTextNovidadeHome": "As últimas novidades sobre nossa empresa.",

        "box-novidade-one": "Tropical Tech já tem certificação ISO 27001",
        "box-novidade-two": "Tropical Tech no Podcast “De Domingo a Domingo”: Fala sobre IA, Talento e o Futuro da Consultoria",
        "box-novidade-three": "Webinares Acadêmicos",



        //footer
        "naoPercaTempo": "Não perca mais tempo, vamos conversar!",
        "wantTea": "Aceita <br> um chá?",

        "linkFooterOne": "Portal de <br> reclamações",
        "linkFooterTwo": "Termos e condições",

        "title-footer-two": "Políticas e Certificações",
        "linkFooterThree": "Política para Fornecedores",
        "linkFooterFour": "Políticas de Privacidade"




    },
    "en": {
        //HEADER
        "title-page": "Tropical Tech - Home",
        "linkAbout": "About",
        "linkServices": "Services",
        "linkCulture": "Culture",
        "linkContact": "Contact",

        //page content
        "titleSectionTopHome": "Innovation is the essence <br> of humanity.",
        "descSectionTopHome": "Transforming IT consulting with the best <br> human talents is our differential.",

        "container-model-one-h2": "Our smile is our best greeting",
        "container-model-one-p": "The well-being of our people is our genuine priority.",

        "linkKnowMoreHome": "learn more &rarr;",

        "nameSectionServicesHome": "SERVICES",
        "mainDescServicesHome": "We drive your business forward",
        "mainTextServicesHome": "With a dedicated team and innovative technological solutions, we channel our energy and creativity to drive your business toward success. We are prepared to turn challenges into extraordinary opportunities!",

        "maisDescNumbersHome": "Our Numbers",
        "word-clientes-home": "Clients",
        "horas-formacao": "Training hours",

        "nameSectionCultureHome": "CULTURE",
        "mainDescCultureHome": "Tropical Culture",

        "mainTextCultureHome": "Our culture is based on pillars such as proximity, well-being, teamwork, constant feedback, and continuous learning.",

        "linkCultureHome": "Culture &rarr;",

        "nameSectionNovidadesHome": "News",
        "mainDescNovidadeHome": "Stay on top of the Tech world",
        "mainTextNovidadeHome": "The latest news about our company.",

        "box-novidade-one": "Tropical Tech is now ISO 27001 certified",
        "box-novidade-two": "Tropical Tech on the 'De Domingo a Domingo' Podcast: Talking about AI, Talent, and the Future of Consulting",
        "box-novidade-three": "Academic Webinars",

        // Footer
        "naoPercaTempo": "Don't waste any more time, let's talk!",
        "wantTea": "Would you like <br> some tea?",

        "linkFooterOne": "Complaints <br> Portal",
        "linkFooterTwo": "Terms and Conditions",

        "title-footer-two": "Policies and Certifications",
        "linkFooterThree": "Supplier Policy",
        "linkFooterFour": "Privacy Policies"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerHTML = translations[lang][key] || key;
    });
}

// Aplica a linguagem salva ao carregar
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "pt";
    changeLanguage(savedLang);
});

// Atualiza a tradução quando o idioma for alterado
document.addEventListener("languageChanged", (event) => {
    changeLanguage(event.detail);
});