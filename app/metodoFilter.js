//MÉTODO FILTER
const idades=[10,22,42,16,50]
const podeDirigir = idades.filter(idade=>{
    return idade>=18;})
//console.log(`Das idades: ${idades}, Podem dirigir: ${podeDirigir}`)

/* function categoria(livros){
    const frontEnd = livros.filter(livro=>{
        return {...livro, categoria:'Front-end'}
    })
    return frontEnd;} 
const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosFront.addEventListener('click', filtrarLivros);    
*/

//APLICANDO NOS LIVROS
//1- pegar todos os botões
const botoes = document.querySelectorAll('.btn');

//2 - Pegar a lista de botões, definir que a cada elemento da lista 
//irá executar um evento, atraves de um click, fazendo um filter de front, back, dados...
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    //3 - identificar o botão clicado, pegando o ID
    const elementoBtn = document.getElementById(this.id);
    //4 - passar o valor do ID para var categoria
    const categoria = elementoBtn.value;
    const livrosFiltrados = categoria =='disponivel'? filtarPorDisponobilidade(): filtarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponíveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponíveis(valorTotal);
    }
}

function filtarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtarPorDisponobilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponíveis(valorTotal){
        elementoComValorTotalDeLivrosDisponiveis.innerHTML += `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}


