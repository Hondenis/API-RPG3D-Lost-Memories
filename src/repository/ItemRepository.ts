
import { Repository } from "typeorm";
import { Item } from "../entity/Item";
import { AppDataSource } from "../data_source";

export class ItemRepository {
    private itemRepository: Repository<Item>;

    constructor() {
        this.itemRepository = AppDataSource.getRepository(Item);
    }

    // Adiciona um item ao banco.
    async addItem(item: Item): Promise<Item> {
        return await this.itemRepository.save(item)
    }

    // Faz a busca do item por id 
    async findOneById(item_id: number): Promise<Item | null> {
        return await this.itemRepository.findOne({ where: {item_id}});
    }

    // Deleta um item se estiver no inventario do xpersonagem. (Essa implementação não é necessaria apenas a do character_item pq se deletar dessa é como se estivesse deletando o item do jogo e não do personagem)
    async deleteItem(item: Item): Promise<void> {
       await this.itemRepository.remove(item);
    }
}