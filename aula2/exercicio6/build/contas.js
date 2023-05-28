"use strict";
class ContaBanco {
    constructor(numero) {
        this._numero = numero;
        this._saldo = 0;
    }
}
class ContaPF extends ContaBanco {
    constructor(numero, cliente) {
        super(numero);
        this.cliente = cliente;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
        }
        else {
            console.log('Saldo insuficiente para o saque.');
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
        }
        else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    }
    getSaldo() {
        return this._saldo;
    }
    getCliente() {
        return this.cliente;
    }
}
class ContaPJ extends ContaBanco {
    constructor(numero, cliente) {
        super(numero);
        this.cliente = cliente;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
        }
        else {
            console.log('Saldo insuficiente para o saque.');
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}`);
        }
        else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    }
    getSaldo() {
        return this._saldo;
    }
    getCliente() {
        return this.cliente;
    }
}
class ClientePF {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }
    getNome() {
        return this._nome;
    }
    getCPF() {
        return this._cpf;
    }
}
class ClientePJ {
    constructor(nomeFantasia, cnpj) {
        this._nomeFantasia = nomeFantasia;
        this._cnpj = cnpj;
    }
    getNomeFantasia() {
        return this._nomeFantasia;
    }
    getCNPJ() {
        return this._cnpj;
    }
}
class Agencia {
    constructor() {
        this._clientes = [];
        this._contas = [];
    }
    adicionarCliente(cliente) {
        this._clientes.push(cliente);
    }
    adicionarConta(conta) {
        this._contas.push(conta);
    }
    mostrarClientes() {
        console.log('Clientes da agência:');
        this._clientes.forEach((cliente) => {
            if (cliente instanceof ClientePF) {
                console.log(`- Pessoa Física: ${cliente.getNome()}, CPF: ${cliente.getCPF()}`);
            }
            else if (cliente instanceof ClientePJ) {
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
contaPF1.depositar(0.00);
contaPF1.depositar(50.00);
contaPF1.sacar(10.00);
console.log();
const clientePJ1 = new ClientePJ('Empresa 123', '10.000.000/0001-00');
const contaPJ1 = new ContaPJ('002', clientePJ1);
agencia.adicionarCliente(clientePJ1);
agencia.adicionarConta(contaPJ1);
agencia.mostrarClientes();
