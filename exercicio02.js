class Pizza{
    constructor(molho, base, cobertura, queijo){
        this.molho = molho;
        this.base = base;
        this.cobertura = cobertura;
        this.queijo = queijo
    }
    escolhaDaPizza(){
        console.log(`escolho o molho ${this.molho}, com a base ${this.base}, com a cobertura ${this.cobertura}, e com o queijo ${this.queijo}`);
    }
}

const pizza1 = new Pizza ("de tomate", "massa fina", "frango com catupiri", "parmesão");

pizza1.escolhaDaPizza();