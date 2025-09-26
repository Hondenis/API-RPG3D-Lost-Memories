import { Repository } from "typeorm";
import { CharacterItem } from "../entity/CharacterItem";
import { AppDataSource } from "../data_source";

export class CharacterItemRepository {
    private characterItemRepository: Repository<CharacterItem>;

    constructor() {
        this.characterItemRepository = AppDataSource.getRepository(CharacterItem);
    }

    async addCharacterItem(characterItem: CharacterItem): Promise<CharacterItem>{
        return await this.characterItemRepository.save(characterItem);
    }

    // Método para buscar por id.
    async findByOwnerId(owner_id: number): Promise<CharacterItem | null> {
        return await this.characterItemRepository.findOne({ where: { owner_id }});
    }

    // Deleta o item do inventario do usuário, recebe o objeto não o id.
    async deleteCharacterItem(characterItem: CharacterItem): Promise<void> {
        await this.characterItemRepository.remove(characterItem);
    }

}

