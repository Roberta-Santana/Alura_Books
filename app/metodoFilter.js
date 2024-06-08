//MÉTODO FILTER
const idades=[10,22,42,16,50]
const podeDirigir = idades.filter(idade=>{
    return idade>=18;})
console.log(`Das idades: ${idades}, Podem dirigir: ${podeDirigir}`)

/* function categoria(livros){
    const frontEnd = livros.filter(livro=>{
        return {...livro, categoria:'Front-end'}
    })
    return frontEnd;} */

//APLICANDO NOS LIVROS
const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');

btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosDeFront);

    function filtrarLivrosDeFront(){
        let livrosFiltrados = livros.filter(livro => 
            livro.categoria == 'front-end'); 
        console.log(livrosFiltrados);
    }



