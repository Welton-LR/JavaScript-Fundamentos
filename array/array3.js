// Buscando elementos em uma array de referência

const filmes = [
    {id: 1, nomeFilme: 'Interestelar'},
    {id: 2 , nomeFilme: 'A Origem'},
    {id: 3 , nomeFilme: 'A Odisseia'},
]

console.log(filmes.find(function(filmes){
    return filmes.nomeFilme == 'A Origem'
}));