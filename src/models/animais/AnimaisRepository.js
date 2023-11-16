export class AnimaisRepository {
    constructor() {
      this.animais = [];
    }
  
    getAnimais() {
      return this.animais;
    }
  
    getAnimaisById(id) {
      return this.animais.find((animal) => animal.id === id);
    }
  
    addAnimais(animal) {
      this.animais.push(animal);
    }
  
    updateAnimais(id, nome, idade, tipo, cor, status, img) {
      const animal = this.getAnimaisById(id);
  
      if (animal) {
        animal.id = id;
        animal.nome = nome;
        animal.idade = idade;
        animal.tipo = tipo;
        animal.cor = cor;
        animal.status = status;
        animal.img = img;
      }
  
      return animal;
    }
  
    deleteAnimais(id) {
      this.animais = this.animais.filter((animal) => animal.id !== id);
    }
  }