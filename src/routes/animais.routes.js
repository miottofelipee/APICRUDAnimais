import { Router } from "express";
import {
    getAnimais,
    getAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal
} from "../controllers/animais.controller.js";

const animaisRouter = Router();

animaisRouter.get("/", getAnimais);
animaisRouter.get("/:id", getAnimal);
animaisRouter.post("/", createAnimal);
animaisRouter.put("/:id", updateAnimal);
animaisRouter.delete("/:id", deleteAnimal);

export default animaisRouter;