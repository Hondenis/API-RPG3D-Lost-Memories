import express  from "express";
import { AttributeController } from "../controller/AttributeController";

const router = express.Router();
const attributeController = new AttributeController();

// Rota para fazer update dos atributos
router.put("/attribute/update", (req, res) => {attributeController.updateAttribute(req,res)});

export default router;
