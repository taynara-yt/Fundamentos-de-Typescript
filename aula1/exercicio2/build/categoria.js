"use strict";
var Categoria;
(function (Categoria) {
    Categoria["Ficcao"] = "Ficcao";
    Categoria["Romance"] = "Romance";
    Categoria["Suspense"] = "Suspense";
    Categoria["Fantasia"] = "Fantasia";
    Categoria["Terror"] = "Terror";
    Categoria["Aventura"] = "Aventura";
    Categoria["Mist\u00E9rio"] = "Mist\u00E9rio";
})(Categoria || (Categoria = {}));
let livros = [
    { nome: "Pachinko", preço: 50.91 },
    { nome: "O labirinto do fauno", preço: 36.81 },
    { nome: "Alice no Páis das Maravilhas", preço: 43.31, categoria: Categoria.Fantasia },
    { nome: "Psicose", preço: 52.41, categoria: Categoria.Terror },
    { nome: "Os crimes ABC", preço: 27.11, categoria: Categoria.Mistério },
    { nome: "Pequena coreografia do adeus", preço: 54.11 },
    { nome: "O iluminado", preço: 74.76, categoria: Categoria.Terror },
    { nome: "O nevoeiro", preço: 69.99, categoria: Categoria.Terror },
    { nome: "Morte no Nilo", preço: 27.91, categoria: Categoria.Mistério },
];
for (const livro of livros) {
    console.log("Livro");
    console.log("Nome:", livro.nome);
    console.log("Preço:", livro.preço);
    console.log("Categoria:", livro.categoria);
    console.log();
}
