let livros=[];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

const elementoParaInserirLivro = document.getElementById('livros');

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    console.table(livros);
    exibirLivrosNaTela(livros);
};

function exibirLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivro.innerHTML +=`<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo"> ${livro.titulo} </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        `
    });
}



// - forEach()
let linguagens = ['Js', 'Python', 'C#'];
/* for(i=0;i<linguagens.length;i++){
    console.log(linguagens[i])
} */
/* linguagens.forEach(elemento => {
    console.log(elemento)}
) */