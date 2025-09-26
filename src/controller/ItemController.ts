import {Request, Response} from "express";
import { Item } from "../entity/Item";
import { ItemService } from "../service/ItemService";


export class ItemController {
    private itemService: ItemService;

    constructor () {
        this.itemService = new ItemService();
    }

    async addItem(req: Request, res: Response): Promise<void> {
        const item: Item = req.body;

        try {
            const savedItem = await this.itemService.addItem(item);
            res.status(201).json(savedItem);
        } catch (error: any) {
            res.status(400).json({message: "", error: error.message});
        }
    }

    async deleteItem(req: Request, res: Response): Promise<void> {
        const { item_id } = req.params; 
        
        try { 
            await this.itemService.deleteItem(Number(item_id));
            res.status(200).json({message: "Item deletado com sucesso."});
        } catch (error: any) {
            res.status(400).json({message: "", error: error.message});
        }
    }

}