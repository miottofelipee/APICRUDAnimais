import { Router } from "express";
import animaisRouter from "./animais.routes.js"

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Servidor rodando!" });
});

router.use("/animais", animaisRouter);

export { router };