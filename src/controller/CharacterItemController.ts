import { Request, Response } from "express";
import { CharacterItemService } from "../service/CharacterItemService";
import { CharacterItem } from "../entity/CharacterItem";


export class CharacterItemController {
    private characterItemService: CharacterItemService;

    constructor () {
        this.characterItemService = new CharacterItemService();
    }

    async addItem(req: Request, res: Response): Promise<void> {
        const characterItem: CharacterItem = req.body;

        try {
            const savedItem = await this.characterItemService.addItem(characterItem);
            res.status(201).json({message: ""}, savedItem);
        } catch (error: any) {
            res.status(400).json({message:"Erro ao adicionar item.", error: error.message });
        }
    }

    async removeItemFromCharacter(req: Request, res: Response ): Promise<void> {
        const { owner_id } = req.params;

        try { 
            await this.characterItemService.removeItemFromCharacter(Number(owner_id));
            res.status(200).json({message: "Item removido do inventário com sucesso."});
        } catch (error: any) {
            res.status(400).json({message: "Não foi possível remover o item", error: error.message});
        }
    }
}