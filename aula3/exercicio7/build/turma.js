"use strict";
var Turno;
(function (Turno) {
    Turno["Manha"] = "Manh\u00E3";
    Turno["Tarde"] = "Tarde";
    Turno["Noite"] = "Noite";
})(Turno || (Turno = {}));
class Turma {
    constructor(id, descricao, turno, curso) {
        this._id = id;
        this._descricao = descricao;
        this._turno = turno;
        this._curso = curso;
    }
    get id() {
        return this._id;
    }
    get descricao() {
        return this._descricao;
    }
    get turno() {
        return this._turno;
    }
    get curso() {
        return this._curso;
    }
}
Turma.turmas = [];
Turma.contador = 1;
function adicionarTurma(turma) {
    console.log("Adicionando turma...");
    turmas.push(turma);
    console.log("Turma Adicionada");
    return turmas;
}
function deletarTurma(posicao) {
    console.log("Deletando turma...");
    turmas.splice(posicao, 1);
    console.log("Turma Deletada!");
    return turmas;
}
function buscarTurma(id) {
    console.log("Pesquisando Turma...");
    for (let turma of turmas) {
        if (turma.id == id) {
            console.log("ID: " + turma.id);
            if (turma.curso.area != undefined) {
                console.log("Area do Curso" + turma.curso.area);
            }
            console.log("Turma encontrada");
            return true;
        }
    }
    console.log("Turma nao encontrada");
    return false;
}
function alterarTurma(id, turmas, turmaNova) {
    console.log("Alterando Turma...");
    for (let i = 0; i < turmas.length; i++) {
        if (turmas[i].id === id) {
            turmas[i] = turmaNova;
            console.log("Turma alterada!");
            return;
        }
    }
    console.log("Turma não encontrada.");
}
function imprimirTurmas(turmas) {
    console.log("Imprimindo turmas...");
    for (let turma of turmas) {
        console.log("ID:", turma.id);
        console.log("Descrição:", turma.descricao);
        console.log("Turno:", turma.turno);
        console.log("Curso:", turma.curso.descricao);
        if (turma.curso.area !== undefined) {
            console.log("Área do Curso:", turma.curso.area);
        }
        console.log("---------------");
    }
}
function pegarTamanho(turmas) {
    console.log("Pegando tamanho das turmas...");
    return turmas.length;
}
let curso = {
    descricao: "SI",
    area: "Exatas",
};
let curso2 = {
    descricao: "Engenharia de Software"
};
let curso3 = {
    descricao: "Biologia",
    area: "Biologicas"
};
let turmas = [];
let turma1 = new Turma(1, "AAA", Turno.Noite, curso);
let turma2 = new Turma(2, "BBB", Turno.Manha, curso2);
let turma3 = new Turma(3, "CCC", Turno.Tarde, curso3);
turmas = adicionarTurma(turma1);
turmas = adicionarTurma(turma2);
turmas = adicionarTurma(turma3);
imprimirTurmas(turmas);
deletarTurma(0);
imprimirTurmas(turmas);
let turmaNova = new Turma(2, "Arquitetura", Turno.Tarde, curso);
alterarTurma(2, turmas, turmaNova);
console.log("Turmas após a alteração:");
imprimirTurmas(turmas);
