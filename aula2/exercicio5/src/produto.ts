type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
  protected _codigo: string;
  protected _nome: string;
  protected _categoria: string;
  protected _preco: number;
  protected _status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this._codigo = this.generateCodigo();
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
    this._status = status;
  }

  protected generateCodigo(): string {
    // gera código único
    return "cod-" + Math.floor(Math.random() * 10000).toString();
  }

 protected adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this._nome}, categoria: ${this._categoria}`);
  }

 protected mudarStatus(status: Status): void {
    if (status === "EM_ESTOQUE") {
      this._status = "EM_ESTOQUE";
    } else {
      this._status = "ESGOTADO";
    }
  }

  getCodigo(): string {
    return this._codigo;
  }

  getNome(): string {
    return this._nome;
  }

  getCategoria():string{
    return this._categoria;
  }

  getPreco():number{
    return this._preco;
  }

  getStatus(): Status {
    return this._status;
  }

  setCodigo(codigo: string){
    this._codigo = codigo;
  }
 
  setNome(nome: string) {
    this._nome = nome;
  }

  setCategoria(categoria: string) {
    this._categoria = categoria;
  }

  setPreco (preco: number){
    this._preco = preco;
  }

  setStatus(status: Status){
    this._status = status;
  }
}

class ProdutoInfantil extends Produto {
  private _faixa_etaria: number;

  constructor(nome: string, categoria: string, preco: number, status: Status, faixa_etaria: number) {
    super(nome, categoria, preco, status);
    this._faixa_etaria = faixa_etaria;
  }

  private validarFaixaEtaria(faixa_etaria:number): void {
    if (faixa_etaria <= 12) {
      console.log("Faixa Etária Válida");
    }else{
      console.log("Faixa etária inválida")
    }
  }

  getFaixaEtaria(): number{
    return this._faixa_etaria;
  }

  setFaixaEtaria(faixa_etaria:number){
    this.validarFaixaEtaria(faixa_etaria);
    this._faixa_etaria = faixa_etaria;
    return ''
  }

  public adicionar(): void {
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

