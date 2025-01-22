# 🎯Classe Heroi - Sistema de aventura🎯

Este projeto implementa uma classe genéria chamada  'Heroi' para representar personagens de uma aventura. A classe possui propriedades e métodos que permitem a interação e ações personalizadas de cada herói.

## Estrutura da Classe

### Propriedades

A classe 'Heroi' possui as seguintes propriedades:

- `nome`: Nome do herói.
- `idade`: Idade do herói.
- `tipo`: Tipo do herói (ex.: Guerreiro, Mago, Monge, Ninja).

### Métodos

#### `classificarAtaque()`

Define o ataque do heró com base no seu tipo:

- **Guerreiro**: `"usando espada"`.
- **Mago**: `"usando magia"`.
- **Monge**: `"usando artes marciais"`.
- **Ninja**: `"usando Shuriken"`.

#### `atacar()`

Retorna uma mensagem com o tipo do herói e a descrição do ataque.
Exemplo:
`"O Guerreiro atacou usando espada"`.

#### `apresentarHeroi()`

Retorna uma mensagem de boas-vindas com detalhes do herói:

- Nome.
- Tipo.
- Idade.

Exemplos:
`"Bem vindo a ilha dos Heróis Monge(a) Iberê, de 24 anos"`.

## Como Utilizar

### Criar uma Instância da Classe

Crie um herói utilizando o operador `new`:

````Javascript
const heroi = new Heroi("Iberê", 24, "Monge");
````
### Exibir informações do Herói
Use o método `apresentarHeroi()` para exibir os detalhes do herói: 

````Javascript
console.log(heroi.apresentarHeroi());
// Saída: O Monge atacou usando artes marciais
````
### Código Completo

````Javascript
class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    classificarAtaque() {
        if (this.tipo === "Guerreiro") return "usando espada";
        if (this.tipo === "Mago") return "usando magia";
        if (this.tipo === "Monge") return "usando artes marciais";
        if (this.tipo === "Ninja") return "usando Shuriken";
    }

    atacar() {
        return `O ${this.tipo} atacou ${this.classificarAtaque()}`;
    }

    apresentarHeroi() {
        return `Bem vindo a ilha dos Heróis ${this.tipo}(a) ${this.nome}, de ${this.idade} anos`;
    }
}

const heroi = new Heroi("Iberê", 24, "Monge");

console.log(heroi.apresentarHeroi());
console.log(heroi.atacar());
````
## Conceitos aplicados
- **Classes**: Estrutura de dados que organiza propriedades e métodos.
- **Encapsulamento**: Combina atributos (`nome`, `idade`, `tipo`)e métodos relacionados em uma entidade única.
- **Template Literals**: Uso de crases(``) para facilitar a interpolação de variáveis em strings.
- **Condicionais**: Uso do `if` para aplicar lógica baseada no valor do atributo `tipo`.
- **Instanciação**: Criação de objetos a partir da classe `Heroi` utilizando o operador `new`.
- **Polimorfismo Simples**: O método `classificarAtaque()` retorna diferentes valores baseados no tipo do herói.
- **Modularidade**: Cada ação relacionada ao herói está organizada em métodos específicos, facilitando a leitura e a manutenção do código.
- **Orientação a Objetos**: Aplicação prática de conceitos como encapsulamento e organização em classes.

## Requisitos e Compatibilidade

- **Requisitos mínimos**:
    - Node.js para executar o código localmente ou navegadores modernos com suporte a ES6+
- **Compatibilidade**:
    - Este código é compatível com qualquer ambiente JavaScript que suporte classes (introduzidas no ES6)

## Possívels Melhorias

- Adicionar mais tipos de heróis e ataques.
- Implementar um sistema de pontos de vida (HP) e dano total em combates.
- Criar subclasses para cada tipo de herói (ex: `Guerreiro`, `Mago`) para explorar herança.
- Introduzir métodos adicionais, como defesa ou habilidade especiais.

## Licença

Este projeto é de código aberto, com o intuito de praticar a linguagem `Javascript` e pode ser usado e modificado livremente.
