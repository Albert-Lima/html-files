const translations = {
    "pt": {
        "title": "Bem-vindo ao nosso site!",
        "description": "Oferecemos os melhores serviços para você."
    },
    "en": {
        "title": "Welcome to our website!",
        "description": "We offer the best services for you."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
    localStorage.setItem("selectedLanguage", lang);
}

// Mantém a escolha do usuário ao recarregar a página
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "pt";
    changeLanguage(savedLang);
});