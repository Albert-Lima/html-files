const translations = {
    "pt": {
        //HEADER
        "title-page": "Tropical Tech - Cultura",
        "linkAbout": "Sobre",
        "linkServices": "Serviços",
        "linkCulture": "Cultura",
        "linkContact": "Contato",

        //container main
        "titleSectionTop": "Cultura",
        "descSectionTop": "A felicidade de cada um depende da felicidade de todos. Na Aubay, abrimos as portas com um sorriso para que todos se sintam em casa desde o primeiro dia.",

        "mainDescCulture": "Eventos",
        "mainTextCulture": "Todos os momentos que passamos juntos são especiais, e aqui dizemos sempre sim a uma boa festa!",

        "healthyTitle":"Tropical Healthy",
        "healthyTitleTwo": "Programa de Saúde e Bem-Estar",
        "healthyDesc": "Acreditamos que é essencial estarmos atentos às nossas pessoas e por isso colocamos o tema da saúde e do bem-estar no topo das nossas prioridades.",

        "titleMainVantagens": "Vantagens",
        "titleOneVantagens": "Clube Tropical",
        "descOneVantagens":"Acesso ao Clube Tropical para continuar a usufruir de centenas de descontos disponíveis",

        "descTwoVantagens": "Acesso às formações da nossa Academia e possibilidade de pertencer à nossa bolsa de Formadores",

        "descThreeVantagens": "acesso privilegiado ao nosso programa de referências",

        "titleFourVantagens": "Validador Técnico",
        "descFourVantagens":"Possibilidade de ser Validador Técnico e ganhar pontos",

        "titleFiveVantagens": "Novidades em primeira mão",
        "descFiveVantagens": "Comunicações com informações exclusivas, sobre o que se passa na Tropical Tech",

        "descSixVantagens": "Possibilidade de marcar presença em alguns dos nossos eventos",




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
        "title-page": "Tropical Tech - Culture",
        "linkAbout": "About",
        "linkServices": "Services",
        "linkCulture": "Culture",
        "linkContact": "Contact",

        //main content
        "titleSectionTop": "Culture",
        "descSectionTop": "The happiness of each person depends on the happiness of everyone. At Aubay, we welcome you with a smile so that everyone feels at home from day one.",

        "mainDescCulture": "Events",
        "mainTextCulture": "Every moment we spend together is special, and here we always say yes to a good party!",

        "healthyTitle": "Tropical Healthy",
        "healthyTitleTwo": "Health and Well-Being Program",
        "healthyDesc": "We believe it is essential to care for our people, which is why we place health and well-being at the top of our priorities.",

        "titleMainVantagens": "Benefits",
        "titleOneVantagens": "Tropical Club",
        "descOneVantagens": "Access to the Tropical Club to continue enjoying hundreds of available discounts.",

        "descTwoVantagens": "Access to training from our Academy and the opportunity to be part of our Trainer network.",

        "descThreeVantagens": "Exclusive access to our referral program.",

        "titleFourVantagens": "Technical Validator",
        "descFourVantagens": "Opportunity to be a Technical Validator and earn points.",

        "titleFiveVantagens": "First-Hand News",
        "descFiveVantagens": "Exclusive communications with information about what’s happening at Tropical Tech.",

        "descSixVantagens": "Opportunity to attend some of our events.",
        
        

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