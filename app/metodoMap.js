function aplicarDesconto(livros){
    const Desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * Desconto)}
    })
    return livrosComDesconto
}