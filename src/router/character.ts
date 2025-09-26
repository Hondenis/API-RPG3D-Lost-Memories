import express from "express";
import { CharacterController } from "../controller/CharacterController";

const router = express.Router();
const characterController = new CharacterController();

// Rota para adicionar um personagem
router.post("/add", (req, res) => {characterController.addCharacter(req, res)});

//Rota para buscar um personagem aleátorio
router.get("/random", (req, res) => characterController.getRandomCharacter(req, res));

// Rota para atualizar a posição de um personagem
router.patch("/:id/position", (req, res) => characterController.updatePosition(req, res));

export default router;