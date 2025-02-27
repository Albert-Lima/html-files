const translations = {
    "pt": {
        //HEADER
        "title-page": "Tropical Tech - Nearshore",
        "linkAbout": "Sobre",
        "linkServices": "Serviços",
        "linkCulture": "Cultura",
        "linkContact": "Contato",

        //container main
        "descSectionTop": "Com clientes em toda a Europa, abrimos caminho com equipes de alta performance, dedicados ao desenvolvimento tecnológico, manutenção e suporte Sempre no tempo, no budget e focados na entrega.",

        "descOutsourcingOne":"Fazemos desenvolvimento tecnológico e gestão integrada. De forma responsável, eficiente, remota ou presencial. O nosso foco é sempre qualidade de resposta.",

        "outSourcingTitleOne":"Soluções",
        "descOutsourcingTwo":"Propomos soluções nearshore ajustadas as necessidades e estratégias de negócio, de cada cliente, assegurando o sucesso dos projetos e a criação de valor acrescentado. Acesso a um conjunto de perfis em: Desenvolvimento, Design, Gestão, Arquitetura, Analistas e Negócio",
        "outSourcingTitleTwo":"O Projeto <br> Nearshore",
        "descOutsourcingThree":"Seguimos um processo eficaz para identificar, recrutar, treinar e monitorar equipes altamente competentes. Adaptadas as necessidades do projeto. O nosso modelo de trabalho abrange vários momentos, da comunicação permanente a abertura de portas para o cliente.",


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
        "title-page": "Tropical Tech - Nearshore",
        "linkAbout": "About",
        "linkServices": "Services",
        "linkCulture": "Culture",
        "linkContact": "Contact",

        //main content
        "descSectionTop": "With clients across Europe, we lead the way with high-performance teams dedicated to technological development, maintenance, and support. Always on time, on budget, and focused on delivery.",

        "descOutsourcingOne": "We provide technological development and integrated management. Responsibly, efficiently, remotely, or in-person. Our focus is always on the quality of response.",

        "outSourcingTitleOne": "Solutions",
        "descOutsourcingTwo": "We offer nearshore solutions tailored to the needs and business strategies of each client, ensuring project success and value creation. Access to a range of profiles in: Development, Design, Management, Architecture, Analysts, and Business.",
        "outSourcingTitleTwo": "The Nearshore <br> Project",
        "descOutsourcingThree": "We follow an effective process to identify, recruit, train, and monitor highly skilled teams. Tailored to the project needs. Our working model covers various stages, from continuous communication to opening doors for the client.",
        

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