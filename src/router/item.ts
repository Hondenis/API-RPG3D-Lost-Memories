import express from "express";
import { ItemController } from "../controller/ItemController";

const router = express.Router();
const itemController = new ItemController();

// Rota para adicionar um item ao banco de dados.
router.post("/item/add", (req, res) => {itemController.addItem(req, res)});

// Rota para deletar um item do banco de dados.
router.delete("/item/remove/:item_id", (req, res) => {itemController.deleteItem(req, res)});

export default router;