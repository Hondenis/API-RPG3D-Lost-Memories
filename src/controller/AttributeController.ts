import { Request, Response} from "express";
import { AttributeService } from "../service/AttributeService"

export class AttributeController {
    private attibuteService: AttributeService

    constructor () {
        this.attibuteService = new AttributeService();
    }

    async updateAttribute(req: Request, res: Response): Promise<void> {
        const { charac_id, nivel} = req.body;
        
        try {
            const updateAttribute = await this.attibuteService.updateAttribute(charac_id, nivel);
            res.status(200).json(updateAttribute);
        } catch (error: any) {
            res.status(400).json({message: "Error ao fazer update dos atributos.",error: error.message});
        }
    }
}