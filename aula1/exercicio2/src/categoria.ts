enum Categoria{ // categoria definida como enum
    Ficcao = "Ficcao",
    Romance = "Romance",
    Suspense = "Suspense",
    Fantasia = "Fantasia",
    Terror = "Terror",
    Aventura = "Aventura",
    Mistério = "Mistério"
}

type Livro = {
    nome: string;
    preço: number;
    categoria?: Categoria; // categoria definida como opcional
}

let biblioteca: Livro[] = [
    {nome: "Pachinko", preço: 50.91}, // categoria nao informada = undefined
    {nome:"O labirinto do fauno", preço: 36.81},// categoria nao informada = undefined
    {nome: "Alice no Páis das Maravilhas", preço: 43.31, categoria: Categoria.Fantasia},
    {nome:"Psicose", preço: 52.41, categoria: Categoria.Terror},
    {nome: "Os crimes ABC", preço: 27.11, categoria: Categoria.Mistério},
    {nome: "Pequena coreografia do adeus", preço: 54.11}, // categoria nao informada = undefined
    {nome: "O iluminado", preço: 74.76, categoria: Categoria.Terror},
    {nome: "O nevoeiro", preço: 69.99, categoria: Categoria.Terror},
    {nome: "Morte no Nilo", preço: 27.91, categoria: Categoria.Mistério},
];


for (const livro of biblioteca) {
    console.log("Livro");
    console.log("Nome:", livro.nome);
    console.log("Preço:", livro.preço);
    console.log("Categoria:", livro.categoria);
    console.log();
  }     


