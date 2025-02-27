const translations = {
    "pt": {
        //HEADER
        "title-page": "Tropical Tech - Página Inicial",
        "linkAbout": "Sobre",
        "linkServices": "Serviços",
        "linkCulture": "Cultura",
        "linkContact": "Contato",

        //container main
        "titleSectionTop": "Services",
        "descSectionTop": "Oferecemos soluções personalizadas de acordo com as necessidades apresentadas, garantido a gestão de todas as etapas do projeto e uma interação permanente com os nossos clientes.",

        "descServicePageOne": "Investimos a nossa energia e criatividade para impulsionar o sucesso do seu negócio. Os nossos serviços permitem externalizar as necessidades de IT dos nossos clientes e otimizar a gestão dos recursos humanos e técnicos associados.",
        "knowMoreOne": "Saber mais &rarr;",
        "knowMoreTwo": "Saber mais &rarr;",
        "knowMoreThree": "Saber mais &rarr;",

        "descServicePageTwo": "Apresentamos soluções à medida das necessidades dos nossos clientes. Trabalhando em colaboração constante, identificamos a abordagem mais adequada para resolver os desafios, assegurando uma gestão abrangente de todas as fases do projeto através de uma interação contínua e dedicada.",
        "descServicePageThree": "Sabemos que o futuro passa por aqui e desde 2019 apostamos nesta vertente. Somos totalmente moldáveis à realidade do cliente, desde o horário do país em que se encontra, à construção de uma equipa especializada e orientada para o seu projeto. Construímos soluções e criamos sinergias com os nossos parceiros. Sempre juntos!",

        "vamosAoPonto": "Vamos ao <br> ponto!",
        "vamosAoPontoDesc": "Seja qual for a solução que seu negócio precisa, estamos aqui",
        "vamosAoPontoOne": "Tenho uma empresa e preciso de fazer uma transformação digital",
        "vamosAoPontoTwo": "Sou investidor e quero desenvolver um produto digital",
        "vamosAoPontoThree": "Preciso reforçar a minha equipa",

        
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

        //container main
        "titleSectionTop": "Services",
        "descSectionTop": "We offer tailored solutions according to the presented needs, ensuring the management of all project stages and constant interaction with our clients.",

        "descServicePageOne": "We invest our energy and creativity to drive the success of your business. Our services allow outsourcing of our clients' IT needs and optimize the management of human and technical resources involved.",
        "knowMoreOne": "Know more &rarr;",
        "knowMoreTwo": "Know more &rarr;",
        "knowMoreThree": "Know more &rarr;",

        "descServicePageTwo": "We present custom solutions tailored to our clients' needs. By working in constant collaboration, we identify the most suitable approach to solve challenges, ensuring comprehensive management of all project phases through continuous and dedicated interaction.",
        "descServicePageThree": "We know the future lies here, and since 2019, we have been focusing on this aspect. We are completely adaptable to the client's reality, from the time zone of their country to building a specialized team focused on their project. We create solutions and build synergies with our partners. Always together!",

        "vamosAoPonto": "Let's get to <br> the point!",
        "vamosAoPontoDesc": "Whatever solution your business needs, we are here",
        "vamosAoPontoOne": "I have a business and need to undergo digital transformation",
        "vamosAoPontoTwo": "I’m an investor and want to develop a digital product",
        "vamosAoPontoThree": "I need to reinforce my team",
        

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