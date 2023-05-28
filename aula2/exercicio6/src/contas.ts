abstract class ContaBanco { //classe abstrata
  protected _numero: string;
  protected _saldo: number;

  constructor(numero: string) {
    this._numero = numero;
    this._saldo = 0;
  }

  //abstract sacar(valor: number): void;
  //abstract depositar(valor: number): void;
}

class ContaPF extends ContaBanco { //Pessoa Fisica
  private cliente: ClientePF;

  constructor(numero: string, cliente: ClientePF) {
    super(numero);
    this.cliente = cliente;
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
    } else {
      console.log('Saldo insuficiente para o saque.');
    }
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
    } else {
      console.log('O valor do depósito deve ser maior que zero.');
    }
  }

  getSaldo(): number {
    return this._saldo;
  }

  getCliente(): ClientePF {
    return this.cliente;
  }
}

class ContaPJ extends ContaBanco { //Pessoa Juridica
  private cliente: ClientePJ;

  constructor(numero: string, cliente: ClientePJ) {
    super(numero);
    this.cliente = cliente;
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
    } else {
      console.log('Saldo insuficiente para o saque.');
    }
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
    } else {
      console.log('O valor do depósito deve ser maior que zero.');
    }
  }

  getSaldo(): number {
    return this._saldo;
  }

  getCliente(): ClientePJ {
    return this.cliente;
  }
}

class ClientePF { //Classe cliente PF e seus atributos
  private _nome: string;
  private _cpf: string;

  constructor(nome: string, cpf: string) {
    this._nome = nome;
    this._cpf = cpf;
  }

  getNome(): string {
    return this._nome;
  }

  getCPF(): string {
    return this._cpf;
  }
}

class ClientePJ { //Classe cliente PJ e seus atributos
  private _nomeFantasia: string;
  private _cnpj: string;

  constructor(nomeFantasia: string, cnpj: string) {
    this._nomeFantasia = nomeFantasia;
    this._cnpj = cnpj;
  }

  getNomeFantasia(): string {
    return this._nomeFantasia;
  }

  getCNPJ(): string {
    return this._cnpj;
  }
}

class Agencia { // classe com clientes em um array
  private _clientes: (ClientePF | ClientePJ)[];
  private _contas: ContaBanco[];

  constructor() {
    this._clientes = [];
    this._contas = [];
  }

  adicionarCliente(cliente: ClientePF | ClientePJ): void { 
    this._clientes.push(cliente);
  }

  adicionarConta(conta: ContaBanco): void { 
    this._contas.push(conta);
  }
   
      mostrarClientes(): void {
        console.log('Clientes da agência:');
        this._clientes.forEach((cliente) => {
          if (cliente instanceof ClientePF) {
            console.log(`- Pessoa Física: ${cliente.getNome()}, CPF: ${cliente.getCPF()}`);
          } else if (cliente instanceof ClientePJ) {
            console.log(`- Pessoa Jurídica: ${cliente.getNomeFantasia()}, CNPJ: ${cliente.getCNPJ()}`);
          }
        });
      }
    }
    
    //---------------------------------------------------------------------------

    const agencia = new Agencia();
    
    const clientePF1 = new ClientePF('Taynara Costa', '123.456.789-00');
    const contaPF1 = new ContaPF('001', clientePF1);
    agencia.adicionarCliente(clientePF1);
    agencia.adicionarConta(contaPF1);
    contaPF1.depositar(0.00)
    contaPF1.depositar(50.00);
    contaPF1.sacar(10.00);
    console.log();
    
    const clientePJ1 = new ClientePJ('Empresa 123', '10.000.000/0001-00');
    const contaPJ1 = new ContaPJ('002', clientePJ1);
    agencia.adicionarCliente(clientePJ1);
    agencia.adicionarConta(contaPJ1);
    
    agencia.mostrarClientes();
    