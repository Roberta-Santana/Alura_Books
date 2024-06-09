const ordenarPorPreco = document.getElementById('btnOrdenarPorPreco');

ordenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco);
exibirLivrosNaTela  (livrosOrdenados);
}
