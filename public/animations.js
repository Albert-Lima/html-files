//animação text
document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".animated-text");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-animated");
            } else {
                entry.target.classList.remove("active-animated"); // Reseta ao sair da tela
            }
        });
    }, { threshold: 0.5 });

    texts.forEach(text => observer.observe(text));
});