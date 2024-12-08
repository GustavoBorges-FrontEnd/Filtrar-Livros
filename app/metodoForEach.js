const elementosParaInserirLivros = document.getElementById("livros")
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis")

function exibirOsLivrosNaTela(listaDeLivros){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ""
    elementosParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        let Disponibilidade = livro.quantidade > 0 ? "livro__imagens":"livro__imagem indisponivel"
        elementosParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="${Disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    })
}
