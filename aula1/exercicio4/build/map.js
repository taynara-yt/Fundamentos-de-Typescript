"use strict";
var Categoria;
(function (Categoria) {
    Categoria["Ficcao"] = "Ficcao";
    Categoria["Romance"] = "Romance";
    Categoria["Suspense"] = "Suspense";
    Categoria["Fantasia"] = "Fantasia";
    Categoria["Terror"] = "Terror";
    Categoria["Aventura"] = "Aventura";
    Categoria["Misterio"] = "Misterio";
})(Categoria || (Categoria = {}));
let biblioteca = [
    { nome: "Pachinko", preço: 50.91 },
    { nome: "O labirinto do fauno", preço: 36.81 },
    { nome: "Alice no Páis das Maravilhas", preço: 43.31, categoria: Categoria.Fantasia },
    { nome: "Psicose", preço: 52.41, categoria: Categoria.Terror },
    { nome: "Os crimes ABC", preço: 27.11, categoria: Categoria.Misterio },
    { nome: "Pequena coreografia do adeus", preço: 54.11 },
    { nome: "O iluminado", preço: 74.76, categoria: Categoria.Terror },
    { nome: "O nevoeiro", preço: 69.99, categoria: Categoria.Terror },
    { nome: "Morte no Nilo", preço: 27.91, categoria: Categoria.Misterio },
];
//mapa que relaciona um autor aos seus livors
const mapa = new Map();
//criar autores e seus respectivos livros
const autor1 = {
    nome: "Stephen King",
    livros: [
        { nome: "O iluminado", preço: 74.76 },
        { nome: "O nevoeiro", preço: 69.99 },
    ],
};
const autor2 = {
    nome: "Agatha Christie",
    livros: [
        { nome: "Os crimes ABC", preço: 27.10 },
        { nome: "Morte no Nilo", preço: 27.90 },
    ],
};
// Adicionar os autores e livros ao mapa
mapa.set(autor1, autor1.livros);
mapa.set(autor2, autor2.livros);
mapa.forEach((livros, autor) => {
    console.log(`Livros do autor ${autor.nome}:`);
    livros.forEach((livro) => {
        console.log(`- ${livro.nome}, Preço: R$ ${livro.preço.toFixed(2)}`);
    });
});
for (const livro of biblioteca) {
    console.log("Livro");
    console.log("Nome:", livro.nome.split(" ").length == 1 ? livro.nome.toUpperCase() : livro.nome.toLocaleLowerCase()); //utilizando operador ternario para definir palavras maiúsculas ou minúsculas.
    console.log("Preço:", livro.preço);
    console.log("Categoria:", livro.categoria ? Categoria[livro.categoria] : "Não informada");
    console.log();
}
