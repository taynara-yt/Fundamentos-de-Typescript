"use strict";
let biblioteca = [["Pachinko", 50.90, "Ficção Histórica"],
    ["O labirinto do fauno", 36.80, "Ficção"],
    ["Alice no Páis das Maravilhas", 43.30, "Fantasia"],
    ["Psicose", 52.40, "Terror psicológico"],
    ["Os crimes ABC", 27.10, "Mistério"],
    ["Pequena coreografia do adeus", 54.11, "Ficção"]
];
for (const livro of biblioteca) {
    const [nome, preco, categoria] = livro;
    console.log("Livro");
    console.log("Nome:", nome);
    console.log("Preço:", preco);
    console.log("Categoria:", categoria);
    console.log();
}
