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
                window.location.href = "home.html";
            } else if (destino === "recursos") {
                window.location.href = "recursos.html"; 
            } else if (destino === "sobre") {
                window.location.href = "sobre.html"; 
            }
        });
    });
    
});