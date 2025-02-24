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

    // Função para ativar um span específico
    function activateSpan(event, selectedSpan) {
        event.stopPropagation(); // Impede que o clique no span afete o restante

        // Remove 'actived-lang' de todos os spans
        spans.forEach(span => span.classList.remove("actived-lang"));

        // Adiciona 'actived-lang' apenas ao span clicado
        selectedSpan.classList.add("actived-lang");

        // Esconde todos os spans
        spans.forEach(span => {
            if (span !== selectedSpan) {
                span.style.display = "none"; // Oculta os outros spans
            } else {
                span.style.display = "flex"; // Mantém apenas o selecionado visível
            }
        });
        

        // Executa uma função específica para cada span
        if (selectedSpan.id === "buttonSelectLangPT") {
            containerFlagLang[1].style.display = "none"
            console.log("Português selecionado!");
        } else if (selectedSpan.id === "buttonSelectLangUS") {
            containerFlagLang[0].style.display = "none"
            console.log("Inglês selecionado!");
        }
    }

    // Adiciona evento de clique individualmente para cada span
    document.getElementById("buttonSelectLangPT").addEventListener("click", function(event) {
        activateSpan(event, this);
    });

    document.getElementById("buttonSelectLangUS").addEventListener("click", function(event) {
        activateSpan(event, this);
    });
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