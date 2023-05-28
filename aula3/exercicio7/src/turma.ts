enum Turno{
    Manha = "Manhã",
    Tarde = "Tarde",
    Noite = "Noite"
 }
 
 interface Curso{
    descricao: string,
    area?:"Humanas"|"Biologicas"| "Exatas";
 }
 
 
 class Turma{
    private static turmas: Turma[] = [];
    private static contador = 1;
 
 
    readonly _id: number;
    private _descricao: string;
    private _turno: Turno;
    private _curso: Curso;
 
 
    constructor (id: number, descricao: string, turno: Turno, curso:Curso){
            this._id = id;
            this._descricao = descricao;
            this._turno = turno;
            this._curso = curso;
        }
 
 
        get id():number{
            return this._id;
        }
       
        get descricao(): string{
            return this._descricao;
        }
 
 
        get turno(): Turno{
            return this._turno;
        }
 
 
        get curso(): Curso{
            return this._curso;
        }
 
 
 }
 
 
 function adicionarTurma(turma:Turma): Array<Turma>{
    console.log("Adicionando turma...");
    turmas.push(turma);
    console.log("Turma Adicionada");
    return turmas;
 }
 
 
 function deletarTurma(posicao:number): Array<Turma>{
    console.log("Deletando turma...");
    turmas.splice(posicao, 1);
    console.log("Turma Deletada!");
    return turmas;
 }
 
 
 function buscarTurma(id:number):boolean{
    console.log("Pesquisando Turma...");
 
    for(let turma of turmas){
        if(turma.id==id){
            console.log("ID: "+turma.id);
            if(turma.curso.area!=undefined){
                console.log("Area do Curso" +turma.curso.area);
            }
            console.log("Turma encontrada");
            return true;
        }
    }
    console.log("Turma nao encontrada");
    return false;
 }
 
 
 function alterarTurma (id:number, turmas:Array<Turma>, turmaNova: Turma){
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
 
 
 function imprimirTurmas(turmas: Array<Turma>){
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
 
 function pegarTamanho(turmas: Turma[]): number {
    console.log("Pegando tamanho das turmas...");
    return turmas.length;
  }
  

  let curso: Curso = {
    descricao: "SI",
    area: "Exatas",
    
  };

  let curso2: Curso={
    descricao: "Engenharia de Software"
  }

  let curso3: Curso={
    descricao: "Biologia",
    area: "Biologicas"
  }


  let turmas: Array<Turma> = [];
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
  

  
 
