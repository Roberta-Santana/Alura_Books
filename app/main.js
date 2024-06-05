let livros=[];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    console.table(livros);

    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livros);
}

// - forEach()
let linguagens = ['Js', 'Python', 'C#'];
/* for(i=0;i<linguagens.length;i++){
    console.log(linguagens[i])
} */
/* linguagens.forEach(elemento => {
    console.log(elemento)}
) */