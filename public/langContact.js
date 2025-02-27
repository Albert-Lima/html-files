const translations = {
    "pt": {
        //HEADER
        "title-page": "Tropical Tech - Contato",
        "linkAbout": "Sobre",
        "linkServices": "Serviços",
        "linkCulture": "Cultura",
        "linkContact": "Contato",

        //container main
        "titleSectionTop": "Contatos",
        "descSectionTop": "Se despertámos a tua atenção, contacte-nos. Esperamos por ti em Lisboa ou no Porto.",        

        "mainDescCultureHome":"Fala connosco",
        "mainTextCultureHome": "Para falares com a equipe Tropical, envia-nos a tua mensagem.",

        "nome": "Nome",
        "email": "E-mail",
        "telefone": "Telefone",
        "msg": "Escreva sua mensagem",

        "checkbox": "Tomei conhecimento que os dados pessoais serão tratados pela Tropical Tech S.A. nos termos da <a href=" + "#" +">Política de Privacidade</a> para fins de contato, a pedido do titular dos dados e de que não devem ser enviados dados de categoria especial (religião, filiação política ou partidária, por exemplo).",

        "send": "Enviar <img src='public/img/Clip path group.png' alt='enviar mensagem'>",

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
        "title-page": "Tropical Tech - Contact",
        "linkAbout": "About",
        "linkServices": "Services",
        "linkCulture": "Culture",
        "linkContact": "Contact",

        //container main
        "titleSectionTop": "Contacts",
        "descSectionTop": "If we have caught your attention, get in touch. We are waiting for you in Lisbon or Porto.",        

        "mainDescCultureHome": "Talk to us",
        "mainTextCultureHome": "To get in touch with the Tropical team, send us your message.",

        "nome": "Name",
        "email": "Email",
        "telefone": "Phone",
        "msg": "Write your message",

        "checkbox": "I acknowledge that personal data will be processed by Tropical Tech S.A. under the terms of the <a href='#'>Privacy Policy</a> for contact purposes, at the request of the data subject, and that no special category data (such as religion, political or party affiliation, for example) should be sent.",

        "send": "Send <img src='public/img/Clip path group.png' alt='send message'>",
        

        // Footer

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
        const translation = translations[lang][key] || key;

        // Se for um campo de entrada, altera o placeholder
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
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
