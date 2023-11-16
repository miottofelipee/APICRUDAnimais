
import { Animal } from "../models/animais/Animais.js"
import { AnimaisRepository } from "../models/animais/AnimaisRepository.js"

const listAnimais = new AnimaisRepository();

export const getAnimais = (req, res) => {
    const animais = listAnimais.getAnimais();
    if (animais.length) {
        return res.status(200).json(animais);
    }
    return res.status(200).json({ message: "Não há animais cadastrados" });
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