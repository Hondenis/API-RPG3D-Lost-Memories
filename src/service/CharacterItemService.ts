import { CharacterItem } from "../entity/CharacterItem";
import { ItemRepository } from "../repository/ItemRepository";
import { CharacterItemRepository } from "../repository/CharacterItemRepository";

export class CharacterItemService {
    private itemRepository: ItemRepository;
    private characterItemRepository: CharacterItemRepository;

    constructor() {
        this.itemRepository = new ItemRepository();
        this.characterItemRepository = new CharacterItemRepository();
    }

    async addItem(characterItem: CharacterItem): Promise<CharacterItem> {
        const itemExisting = await this.itemRepository.findOneById(characterItem.items.item_id);

        if (!itemExisting) {
            throw new Error("O item não existe no banco de dados.");
        }

        const savedCharacterItem = await this.characterItemRepository.addCharacterItem(characterItem);
        console.log("Item adicionado ao invetário do personagem:", savedCharacterItem);
        return savedCharacterItem;
    }

    async removeItemFromCharacter(owner_id: number): Promise<void> {
        const characterItem = await this.characterItemRepository.findByOwnerId(owner_id); 
        if (!characterItem) { 
            throw new Error("Item não encontrado no inventário do personagem.");
        }

      await this.characterItemRepository.deleteCharacterItem(characterItem);
      console.log("Item removido do inventário do personagem.")
    }
    
}