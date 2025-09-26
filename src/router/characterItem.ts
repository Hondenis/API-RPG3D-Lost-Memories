import express  from "express";
import { CharacterItemController } from "../controller/CharacterItemController";

const router = express.Router();
const characterItemController = new CharacterItemController();

// Rota para adicionar um item ao personagem
router.post("/character-item/add", (req, res) => {characterItemController.addItem(req, res)});

// Rota para deletar um item do personagem
router.delete("/character-item/remove/:owner_id", (req, res) => {characterItemController.removeItemFromCharacter(req, res)});

export default router;