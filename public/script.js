/* Seleção de elementos */
const bttLang = document.querySelector(".btt-lang"); // Div que contém os spans
const containerFlagLang = document.querySelectorAll(".container-flag-lang");
const iconOpenLang = document.querySelector(".icon-open-lang"); // Ícone de abrir idioma

// Evento para abrir/fechar as opções ao clicar no ícone
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

        let selectedLang = "pt"; // Padrão

        if (selectedSpan.id === "buttonSelectLangPT") {
            containerFlagLang[1].style.display = "none";
            selectedLang = "pt";
        } else if (selectedSpan.id === "buttonSelectLangUS") {
            containerFlagLang[0].style.display = "none";
            selectedLang = "en";
        }

        // Salva a escolha do idioma no localStorage
        localStorage.setItem("selectedLanguage", selectedLang);

        // Dispara um evento personalizado para notificar a mudança de idioma
        document.dispatchEvent(new CustomEvent("languageChanged", { detail: selectedLang }));
    }

    document.getElementById("buttonSelectLangPT").addEventListener("click", function(event) {
        activateSpan(event, this);
    });

    document.getElementById("buttonSelectLangUS").addEventListener("click", function(event) {
        activateSpan(event, this);
    });

    // Verifica o idioma salvo e aplica ao carregar a página
    const savedLang = localStorage.getItem("selectedLanguage") || "pt";
    const activeSpan = savedLang === "pt" ? document.getElementById("buttonSelectLangPT") : document.getElementById("buttonSelectLangUS");
    activateSpan(new Event("load"), activeSpan);
});






/*responsividade menu header*/
document.addEventListener("DOMContentLoaded", () => {
    const menuHamburger = document.querySelector(".menu-hamburger"); // Section onde o conteúdo será inserido
    const headerMainPage = document.querySelector(".header-main-page"); // O header onde o conteúdo começa
    const nav = document.querySelector("nav"); // O menu de navegação
    const containerSelectLang = document.querySelector(".container-select-lang"); // Seletor de idioma

    // Função para mover os elementos conforme o tamanho da tela
    function handleResponsiveMenu() {
        if (window.innerWidth < 701) {
            // Verifica se os elementos ainda não foram movidos para o menu-hamburger
            if (menuHamburger && !menuHamburger.contains(nav)) {
                // Move os elementos para dentro da section menu-hamburger
                menuHamburger.appendChild(nav);
                menuHamburger.appendChild(containerSelectLang);
            }
        } else {
            // Verifica se os elementos estão dentro do menu-hamburger e move-os de volta para o header
            if (headerMainPage && menuHamburger.contains(nav)) {
                headerMainPage.appendChild(nav); // Move para o header da página
                headerMainPage.appendChild(containerSelectLang); // Move o seletor de idioma de volta
            }
        }
    }

    // Verifica a largura da tela ao carregar a página
    handleResponsiveMenu();

    // Adiciona um listener para quando o tamanho da tela mudar
    window.addEventListener('resize', () => {
        handleResponsiveMenu(); // Verifica novamente se a largura é maior ou menor que 701px
    });
});

/*abrir e fechar menu*/
document.addEventListener("DOMContentLoaded", () => {
    const bttHamburger = document.querySelector(".btt-hamburger"); // Botão do hambúrguer
    const menuHamburger = document.querySelector(".menu-hamburger"); // Menu hambúrguer
    const closedHamburger = document.querySelector(".closed-hamburger"); // Ícone de "abrir" o menu
    const openHamburger = document.querySelector(".open-hamburger"); // Ícone de "fechar" o menu

    // Inicialmente o menu está fechado
    menuHamburger.style.right = "-120%"; // Menu fora da tela

    bttHamburger.addEventListener("click", () => {
        // Alterna a posição do menu
        if (menuHamburger.style.right === "0px") {
            // Menu está aberto, então fecha
            menuHamburger.style.right = "-120%"; // Esconde o menu
            closedHamburger.style.display = "block"; // Exibe ícone de "abrir"
            openHamburger.style.display = "none"; // Esconde ícone de "fechar"
        } else {
            // Menu está fechado, então abre
            menuHamburger.style.right = "0px"; // Exibe o menu
            closedHamburger.style.display = "none"; // Esconde ícone de "abrir"
            openHamburger.style.display = "block"; // Exibe ícone de "fechar"
        }
    });
});


// Função para animar a contagem até o número final
// Função para animar a contagem até o número final
function animateNumber(element, finalNumber) {
    let currentNumber = 0;
    const increment = finalNumber / 100; // Incrementa de forma suave
    const interval = setInterval(() => {
        currentNumber += increment;
        element.innerText = `+${Math.round(currentNumber)}`;
        if (currentNumber >= finalNumber) {
            clearInterval(interval);
            element.innerText = `+${finalNumber}`; // Garantir que chegue ao número final
        }
    }, 60); // Ajuste para mais rápido ou lento
}

// Função de callback para o Intersection Observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            let finalNumber = 0;

            if (element.id === 'aubilousNumbers') {
                finalNumber = 364; // Número para o aubilousNumbers
            } else if (element.id === 'clientNumbers') {
                finalNumber = 38; // Número para o clientNumbers
            }

            animateNumber(element, finalNumber);
            observer.unobserve(element); // Para de observar após a animação
        }
    });
};

// Criar o Intersection Observer
const observer = new IntersectionObserver(callback, {
    threshold: 0.5 // A animação começa quando 50% do elemento estiver visível
});

// Começar a observar os elementos com ids específicos
const aubilousNumbersElement = document.getElementById('aubilousNumbers');
const clientNumbersElement = document.getElementById('clientNumbers');

observer.observe(aubilousNumbersElement);
observer.observe(clientNumbersElement);








/*slide home*/
const images = document.querySelectorAll('.container-image');
let currentIndex = 1; // Começa na segunda imagem (meio do primeiro trio)

function updateSlider() {
    images.forEach((image) => {
        image.classList.remove('active', 'side', 'left', 'right', 'center');
        image.style.opacity = "0";
    });

    // Aplicar classes para transição suave
    if (images[currentIndex - 1]) {
        images[currentIndex - 1].classList.add('side', 'left'); // Esquerda
        images[currentIndex - 1].style.opacity = "0.6";
    }

    images[currentIndex].classList.add('active', 'center'); // Centro (destacada)
    images[currentIndex].style.opacity = "1";

    if (images[currentIndex + 1]) {
        images[currentIndex + 1].classList.add('side', 'right'); // Direita
        images[currentIndex + 1].style.opacity = "0.6";
    }
}

function nextSlide() {
    if (currentIndex < images.length - 2) {
        currentIndex++;
    } else {
        currentIndex = 1; // Volta para o começo
    }
    updateSlider();
}

document.getElementById('back-slide').addEventListener('click', () => {
    if (currentIndex > 1) {
        currentIndex--;
    } else {
        currentIndex = images.length - 2; // Volta para o final
    }
    updateSlider();
});

document.getElementById('next-slide').addEventListener('click', nextSlide);

// Permitir que a imagem do meio avance o slide ao ser clicada
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        if (index === currentIndex) {
            nextSlide();
        }
    });
});

// Inicializa o slider
updateSlider();



