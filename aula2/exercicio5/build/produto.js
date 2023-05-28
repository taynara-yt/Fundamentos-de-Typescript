"use strict";
class Produto {
    constructor(nome, categoria, preco, status) {
        this._codigo = this.generateCodigo();
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
    }
    generateCodigo() {
        // gera código único
        return "cod-" + Math.floor(Math.random() * 10000).toString();
    }
    adicionar() {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this._nome}, categoria: ${this._categoria}`);
    }
    mudarStatus(status) {
        if (status === "EM_ESTOQUE") {
            this._status = "EM_ESTOQUE";
        }
        else {
            this._status = "ESGOTADO";
        }
    }
    getCodigo() {
        return this._codigo;
    }
    getNome() {
        return this._nome;
    }
    getCategoria() {
        return this._categoria;
    }
    getPreco() {
        return this._preco;
    }
    getStatus() {
        return this._status;
    }
    setCodigo(codigo) {
        this._codigo = codigo;
    }
    setNome(nome) {
        this._nome = nome;
    }
    setCategoria(categoria) {
        this._categoria = categoria;
    }
    setPreco(preco) {
        this._preco = preco;
    }
    setStatus(status) {
        this._status = status;
    }
}
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = faixa_etaria;
    }
    validarFaixaEtaria(faixa_etaria) {
        if (faixa_etaria <= 12) {
            console.log("Faixa Etária Válida");
        }
        else {
            console.log("Faixa etária inválida");
        }
    }
    getFaixaEtaria() {
        return this._faixa_etaria;
    }
    setFaixaEtaria(faixa_etaria) {
        this.validarFaixaEtaria(faixa_etaria);
        this._faixa_etaria = faixa_etaria;
        return '';
    }
    adicionar() {
        super.adicionar(); // Chama o método adicionar da classe base
        console.log("Método adicionar na classe ProdutoInfantil");
    }
}
const novoProdutoInfantil = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 12);
novoProdutoInfantil.adicionar();
//console.log(novoProdutoInfantil.getFaixaEtaria());
console.log(novoProdutoInfantil.getCategoria());
console.log('', novoProdutoInfantil.setFaixaEtaria(14));
console.log();
const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProduto.getNome()); // Output: Shampoo
console.log(novoProduto.getCategoria());
console.log(novoProduto.getCodigo());
