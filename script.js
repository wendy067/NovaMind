// espera o html carregar pra q ja exista os dados no DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // busca os links 
    const links = document.querySelectorAll(".navbar nav ul li a");

    // pra tal link adiciona um ouvinte de clique pra abrir outra página
    links.forEach(link => {
        link.addEventListener("click", (event) => {
   
            // Impede que o link funcione normalmente (não siga a URL imediatamente)
            event.preventDefault(); 
 
            // transforma o texto do link em letras minusculas
            const destino = link.textContent.toLowerCase();

            if (destino === "home") {
                window.location.href = "index.html";
            } else if (destino === "recursos") {
                window.location.href = "recursos.html"; 
            } else if (destino === "sobre") {
                window.location.href = "sobre.html"; 
            }
        });
    });
    
});


const themeToggleButton = document.querySelector("#theme-toggle");
const bodyElement = document.body;


const savedTheme = localStorage.getItem("novaMind_theme");
if (savedTheme === "dark") {
    bodyElement.classList.add("dark-mode");
    themeToggleButton.textContent = "☀️ Modo Claro";
}

themeToggleButton.addEventListener("click", () => {

    bodyElement.classList.toggle("dark-mode");

const isDarkModeActive = bodyElement.classList.contains("dark-mode");
    if (isDarkModeActive) {
        themeToggleButton.textContent = "☀️ Modo Claro";

        localStorage.setItem("novaMind_theme", "dark");
    } else {
        themeToggleButton.textContent = "🌙 Modo Escuro";
        // Atualizamos o localStorage para o padrão (light)
        localStorage.setItem("novaMind_theme", "light");
    }
});
