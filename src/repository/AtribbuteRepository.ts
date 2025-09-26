import { Repository } from "typeorm";
import { Attribute } from "../entity/Attribute";
import { AppDataSource } from "../data_source";

export class AttributeRepository {
    private attributeRepository: Repository<Attribute>;

    constructor() {
        this.attributeRepository = AppDataSource.getRepository(Attribute);
    }
     
    /*
    // Criar novo atributo
    async createAttribute(attribute: Attribute): Promise<Attribute> {
        return await this.attributeRepository.save(attribute);
    }
    */

    /*
    // Buscar atributo por ID
    async getAttributeById(atrib_id: number): Promise<Attribute | null> {
        const attribute = await this.attributeRepository.findOne({ where: {atrib_id},
            relations: ["character"],
        });
        return attribute;
    }
    */

    // Atualizar atributo (Quando evoluir)
    async updateAttribute(attribute: Attribute): Promise<Attribute> {
        return await this.attributeRepository.save(attribute);
    }
    
    /*
    // Deletar attributo por ID
    async deleteAttribute(atrib_id: number): Promise<void> {
        await this.attributeRepository.delete(atrib_id);
    }
    */

    // Buscar os atributos por personagem
    async getByCharacterId(charac_id: number): Promise<Attribute | null> {
        const attribute = await this.attributeRepository.findOne({ where: { character: {charac_id}},
            relations: ["character"]
        });
        return attribute; 
    }
}