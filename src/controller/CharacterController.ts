import { Request, Response} from "express";
import { CharacterService } from "../service/CharacterService";
import { Characters } from "../entity/Characters";



export class CharacterController {
    private characterService: CharacterService;

    constructor () {
        this.characterService = new CharacterService();
    }
    // Endpoint para adicionar um novo personagem.
    async addCharacter(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const { nome, positions } = req.body;
        
        const character = new Characters(nome, positions);
        try {
            const savedCharacter = await this.characterService.addCharacter(character);
            res.status(201).json({message:"Personagem criado com sucesso", character: savedCharacter});
        } catch (error: any) {
            res.status(400).json({ message: "Erro ao criar persongem", error: error.message});
        }
    }
    
    // Endpoint para buscar um personagem aleatório
    async getRandomCharacter(req: Request, res: Response): Promise<Response> {
        try {
            const character = await this.characterService.getRandomCharacter();
            if (!character) {
                return res.status(404).json({message: "Personagem não encontrado!"});
            }

            return res.status(200).json(character);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }

    // Endpoint para atualizar a posição do personagem
    async updatePosition(req: Request, res: Response): Promise<Response> {
        try {
            const charac_id = Number(req.params.id);
            const { positions } =  req.body;

            console.log("[DEBUG] Recebendo atualização de posição", {charac_id, positions});
            console.log(positions);
            if (!positions) {
                return res.status(400).json({message: "Formato da posição invalida. Esperadoi{ x: number, y: number, z: number}"});
            }

            const result = await this.characterService.updatePosition(charac_id, positions);
            console.log("[DEBUG] Posição atualizada no banco:", result);
            return res.status(200).json(result);
        } catch (error) {
            console.error("[ERROR] Falha ao atualizar posição:", error);
            return res.status(500).json({error: error.message});
        }
    }
}