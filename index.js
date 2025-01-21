class Heroi{

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    classificarAtaque(){
        if(this.tipo === "Guerreiro") return "usando espada";
        if(this.tipo === "Mago") return "usando magia";
        if(this.tipo === "Monge") return "usando artes marciais";
        if(this.tipo === "Ninja") return "usando Shuriken";        
    }

    atacar(){
        return `O ${this.tipo} atacou ${this.classificarAtaque()}`
    }

    apresentarHeroi(){
        return `Bem vindo a ilha dos Heróis ${this.tipo}(a) ${this.nome}, de ${this.idade} anos`
    }

}

const heroi = new Heroi("Iberê", 24, "Monge");

console.log(heroi.apresentarHeroi())
console.log(heroi.atacar())
