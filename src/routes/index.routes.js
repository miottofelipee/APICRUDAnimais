import { Router } from "express";
import AnimaisRouter from "./animais.routes.js"

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Servidor rodando!" });
});

router.use("/animais", AnimaisRouter);

export { router };