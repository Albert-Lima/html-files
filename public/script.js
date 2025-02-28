const bttLang = document.querySelector(".btt-lang");
const containerFlagLang = document.querySelectorAll(".container-flag-lang");
const iconOpenLang = document.querySelector(".icon-open-lang");

// open and close language buttons
iconOpenLang.addEventListener("click", () => {
    containerFlagLang[0].style.display = "flex"
    containerFlagLang[1].style.display = "flex"
});

document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll(".container-flag-lang");

    function activateSpan(event, selectedSpan) {
        event.stopPropagation();

        spans.forEach(span => span.classList.remove("actived-lang"));
        selectedSpan.classList.add("actived-lang");

        spans.forEach(span => {
            if (span !== selectedSpan) {
                span.style.display = "none";
            } else {
                span.style.display = "flex";
            }
        });

        let selectedLang = "pt"; // Standard

        if (selectedSpan.id === "buttonSelectLangPT") {
            containerFlagLang[1].style.display = "none";
            selectedLang = "pt";
        } else if (selectedSpan.id === "buttonSelectLangUS") {
            containerFlagLang[0].style.display = "none";
            selectedLang = "en";
        }

        // Save in localStorage
        localStorage.setItem("selectedLanguage", selectedLang);

        document.dispatchEvent(new CustomEvent("languageChanged", { detail: selectedLang }));
    }

    document.getElementById("buttonSelectLangPT").addEventListener("click", function(event) {
        activateSpan(event, this);
    });

    document.getElementById("buttonSelectLangUS").addEventListener("click", function(event) {
        activateSpan(event, this);
    });

    const savedLang = localStorage.getItem("selectedLanguage") || "pt";
    const activeSpan = savedLang === "pt" ? document.getElementById("buttonSelectLangPT") : document.getElementById("buttonSelectLangUS");
    activateSpan(new Event("load"), activeSpan);
});


/*responsivite menu header*/
document.addEventListener("DOMContentLoaded", () => {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const headerMainPage = document.querySelector(".header-main-page");
    const nav = document.querySelector("nav");
    const containerSelectLang = document.querySelector(".container-select-lang"); // Select language

    function handleResponsiveMenu() {
        if (window.innerWidth < 701) {
            if (menuHamburger && !menuHamburger.contains(nav)) {
                menuHamburger.appendChild(nav);
                menuHamburger.appendChild(containerSelectLang);
            }
        } else {
            if (headerMainPage && menuHamburger.contains(nav)) {
                headerMainPage.appendChild(nav);
                headerMainPage.appendChild(containerSelectLang);
            }
        }
    }

    handleResponsiveMenu();

    window.addEventListener('resize', () => {
        handleResponsiveMenu();
    });
});

/*open and close menu*/
document.addEventListener("DOMContentLoaded", () => {
    const bttHamburger = document.querySelector(".btt-hamburger");
    const menuHamburger = document.querySelector(".menu-hamburger");
    const closedHamburger = document.querySelector(".closed-hamburger");
    const openHamburger = document.querySelector(".open-hamburger");

    menuHamburger.style.right = "-120%";

    bttHamburger.addEventListener("click", () => {
        // Menu posiction
        if (menuHamburger.style.right === "0px") {
            // Open Menu
            menuHamburger.style.right = "-120%";
            closedHamburger.style.display = "block";
            openHamburger.style.display = "none";
        } else {
            // Closed Menu
            menuHamburger.style.right = "0px";
            closedHamburger.style.display = "none";
            openHamburger.style.display = "block";
        }
    });
});


// Animate Numbers
function animateNumber(element, finalNumber) {
    let currentNumber = 0;
    const increment = finalNumber / 100;
    const interval = setInterval(() => {
        currentNumber += increment;
        element.innerText = `+${Math.round(currentNumber)}`;
        if (currentNumber >= finalNumber) {
            clearInterval(interval);
            element.innerText = `+${finalNumber}`;
        }
    }, 60);
}

// Function callback to Intersection Observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            let finalNumber = 0;

            if (element.id === 'aubilousNumbers') {
                finalNumber = 364;
            } else if (element.id === 'clientNumbers') {
                finalNumber = 38;
            }

            animateNumber(element, finalNumber);
            observer.unobserve(element);
        }
    });
};

// Ceate the Intersection Observer
const observer = new IntersectionObserver(callback, {
    threshold: 0.5 // A animação começa quando 50% do elemento estiver visível
});

const aubilousNumbersElement = document.getElementById('aubilousNumbers');
const clientNumbersElement = document.getElementById('clientNumbers');

observer.observe(aubilousNumbersElement);
observer.observe(clientNumbersElement);



