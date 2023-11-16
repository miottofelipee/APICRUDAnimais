import { v4 as uuidv4 } from "uuid";

export class Animal {
  constructor(nome, idade, tipo, cor, status, img) {
    this.id = this.generateId();
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.cor = cor;
    this.status = status;
    this.img = img;
  }

  generateId() {
    return uuidv4();
  }
}