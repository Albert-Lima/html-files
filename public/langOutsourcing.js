const translations = {
    "pt": {
        //HEADER
        "title-page": "Tropical Tech - Outsourcing",
        "linkAbout": "Sobre",
        "linkServices": "Serviços",
        "linkCulture": "Cultura",
        "linkContact": "Contato",

        //container main
        "descSectionTop": "O nosso segredo é uma equipe multidisciplinar composta por especialistas que possuem amplo conhecimento tecnológico, desde Linux, Microsoft, até Java, IBM, OutSystems e Oracle.",

        "descOutsourcingOne":"Solucionamos e simplificamos todos os projetos de TI para a sua empresa. Partilhamos conhecimento, estabelecemos metas e gerimos amplamente os aspectos de cada processo até alcançar o objetivo traçado.",
        "outSourcingTitleOne":"Porque <br> Outsourcing?",
        "descOutsourcingTwo":"Cobertura nacional com escritórios nos distritos de Lisboa e Porto. Com uma equipe de RH especializada, composta por profissionais em recrutamento em TI, realizamos cerca de 300 entrevistas por mês, a partir de uma análise média de 800 candidatos.",
        "outSourcingTitleTwo":"Comodidade e <br> Segurança",
        "descOutsourcingThree":"Somos conectados e antenados a cada um de nossos clientes. Procuramos antecipar e atender todas as suas necessidades. Respondemos sempre de forma eficiente e proativa. Utilizamos das melhores práticas do mercado, para gestão e tecnologias. Criamos sinergias com os nossos parceiros. Sempre juntos!",


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
        "title-page": "Tropical Tech - Outsourcing",
        "linkAbout": "About",
        "linkServices": "Services",
        "linkCulture": "Culture",
        "linkContact": "Contact",

        //main content
        "descSectionTop": "Our secret is a multidisciplinary team of specialists with extensive technological knowledge, from Linux, Microsoft, to Java, IBM, OutSystems, and Oracle.",

        "descOutsourcingOne": "We solve and simplify all IT projects for your company. We share knowledge, set goals, and manage every aspect of each process to achieve the desired outcome.",
        "outSourcingTitleOne": "Why <br> Outsourcing?",
        "descOutsourcingTwo": "National coverage with offices in the Lisbon and Porto districts. With a specialized HR team, composed of IT recruitment professionals, we conduct around 300 interviews per month, analyzing an average of 800 candidates.",
        "outSourcingTitleTwo": "Convenience and <br> Security",
        "descOutsourcingThree": "We are connected and in tune with each of our clients. We strive to anticipate and meet all of their needs. We always respond efficiently and proactively. We use the best market practices for management and technologies. We create synergies with our partners. Always together!",

        
        

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