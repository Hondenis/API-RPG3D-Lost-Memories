import { Characters } from "../entity/Characters";
import { CharacterRepository } from "../repository/CharacterRepository";

export class CharacterService {
    private characterRepository: CharacterRepository;

    constructor() {
        this.characterRepository = new CharacterRepository();
    }

    async addCharacter(characters: Characters): Promise<Characters> {
        try {
            console.log("[SERVICE] Buscando charact", characters);

            // Verifica se o personagem já existe
           const existingCharacter = await this.characterRepository.findByName(characters.nome);
           console.log("[SERVICE] Verificando characters.nome", characters.nome);
            
           // Se EXISTIR, atualiza a posição
            if (existingCharacter) {
                const updateCharacter = await this.characterRepository.updatePosition(existingCharacter.charac_id, characters.positions);
                
                console.log("Posição atualizada:", updateCharacter);
            }  
            // Se NÃO existir, cria um novo
            const newCharacter = await this.characterRepository.addCharacter(characters);
            console.log("[SERVICE] Novo personagem criado:", characters);
            return newCharacter;
        
    } catch (error) {
       throw new Error(`Erro ao adicionar personagem: ${error.message}`);
    }
        
    }

      // Método para pegar um personagem aleatório do banco de dados
    async getRandomCharacter(): Promise<Characters | undefined> {
        try {
            const ramdomCharacter = await this.characterRepository.getRandomCharacter();
            return ramdomCharacter;
        } catch (error) {
            throw new Error(`Nenhum personagem encontrado: ${error.message}`);
        }
    }
    
     // Método para salvar a posição do personagem
     async updatePosition(charac_id: number, position: string ) {
        try {
            console.log("[SERVICE] Buscando personagem ID:", charac_id);
            const character = await this.characterRepository.updatePosition(charac_id, position);
            
            if (!character) {
                throw new Error("Personagem não encontrado")
            }

            console.log("[SERVICE] Posição atualizada")
            return { message: "Posição salva com sucesso", character };
        } catch (error) {
            console.error("[SERVICE ERROR] Erro ao atualizar posição:", error); 
            throw error;
        }
    }
}