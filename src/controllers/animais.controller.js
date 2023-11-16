
import { Animal } from "../models/animais/Animais.js"
import { AnimaisRepository } from "../models/animais/AnimaisRepository.js"

const listAnimais = new AnimaisRepository();
const Url = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) == null;
}

export const getAnimais = (req, res) => {
    const animais = listAnimais.getAnimais();
    if (animais.length) {
        return res.status(200).send({animais, quantidade: animais.length});
    }
    return res.status(404).json({ message: "Não há animais cadastrados" });
};

export const getAnimal = (req, res) => {
    const { id } = req.params;
    const animal = listAnimais.getAnimaisById(id);

    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });

    return res.send(animal);
};

export const createAnimal = (req, res) => {
    const { nome, idade, tipo, cor, status, img } = req.body;
    const animal = new Animal(nome, idade, tipo, cor, status, img);

    if( !nome || !idade || !tipo || !cor || !img){
        return res.status(400).send("Dados insuficientes");
    }

    if(nome.length > 50 || nome.length <3){
        return res.status(400).send('O tamanho do nome deve ser entre 3 e 50');
    }

    if(tipo.length > 30){
        return res.status(400).send('Tipo de animal muito grande!');
    }

    if(cor.length > 20){
        return res.status(400).send('Cor muito grande!');
    }

    if(idade < 0 || !(Number.isInteger(idade))){
        return res.status(400).send({message:"Idade inválida"});
    }

    if(!(Url(img))){
        return res.status(400).send({message:"Formato da imagem inválida"});
    }

    if(typeof(status) !== "boolean"){
        return res.status(400).send({mensage: "Status de vacinção invalido"})
    }

    listAnimais.addAnimais(animal);
    return res.status(201).send(animal);
};

export const updateAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, status, img } = req.body;

    const animal = listAnimais.getAnimaisById(id);

    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });

    listAnimais.updateAnimais(nome, idade, tipo, cor, status, img);

    return res.send(animal);
};

export const deleteAnimal = (req, res) => {
    const { id } = req.params;
    const animal = listAnimais.getAnimaisById(id);

    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });

    listAnimais.deleteAnimais(id);

    return res.send(animal);
};