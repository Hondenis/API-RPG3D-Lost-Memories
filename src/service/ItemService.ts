import { Item } from "../entity/Item";
import { ItemRepository } from "../repository/ItemRepository";

export class ItemService {
    private itemRepository: ItemRepository;

    constructor() {
        this.itemRepository = new ItemRepository();
    }

    // Adiciona um item ao banco de dados.
    async addItem(item: Item): Promise<Item> {
        const savedItem = await this.itemRepository.addItem(item);
        console.log("Item salvo no banco de dados", savedItem);
        return savedItem;
    }

    // Deleta um item existente no banco de dados.
    async deleteItem(item_id: number): Promise<void> {
    const item = await this.itemRepository.findOneById(item_id);
    if (!item) {
            throw new Error ("Item não encontado no banco de dados.");
        }
        // Chama a função de remover o item.
        await this.itemRepository.deleteItem(item);
    }
}    