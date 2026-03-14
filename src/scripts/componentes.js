// Componentes do site EcoTrend

function getHeader(paginaAtual) {
    return `
    <nav class="navbar navbar-expand-lg" style="background-color: #2d6a4f; padding: 10px 0;">
        <div class="container">
            <a class="navbar-brand text-white" href="index.html" style="font-weight: bold; font-size: 24px;">EcoTrend</a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link text-white" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="categoria.html">Produtos</a></li>
                    <li class="nav-link text-white">|</li>
                    <li class="nav-item"><a class="nav-link text-white" href="contato.html">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
}

function getFooter() {
    return `
    <footer style="background-color: #1b4332; color: white; padding: 20px; margin-top: 40px;">
        <div class="container">
            <p style="margin: 0;">© 2026 EcoTrend - Produtos Sustentáveis</p>
            <p style="font-size: 12px; margin-top: 5px; opacity: 0.7;">
                <a href="#" style="color: white;">Politica de Privacidade</a> | 
                <a href="#" style="color: white;">Termos de Uso</a>
            </p>
        </div>
    </footer>
    `;
}

function carregarComponente(id, conteudo) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = conteudo;
    }
}
