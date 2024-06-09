function calcularValorTotalDeLivrosDisponíveis(livrosFiltrados){
    return livrosFiltrados.reduce((acc, livro) =>
    acc+ livro.preco, 0).toFixed(2);
}