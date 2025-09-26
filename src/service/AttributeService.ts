import { AttributeRepository } from "../repository/AtribbuteRepository";
import { Attribute } from "../entity/Attribute";

export class AttributeService {
    private attributeRepository: AttributeRepository;

    constructor() {
        this.attributeRepository = new AttributeRepository();
    }

    // Faz o update dos atributos do personagem
    async updateAttribute(charac_id: number, nivel: number): Promise<Attribute> {
        const attribute = await this.attributeRepository.getByCharacterId(charac_id);

        if (!attribute) {
            throw new Error (`Atributos do personagem com ID ${charac_id} não encontrados.`);
        }

        // Aplica a evolução dos atributos com base no nível do personagem.
        attribute.evoluir(nivel);

        // Salva as alterações no banco de dados
        const  updateAttribute = await this.attributeRepository.updateAttribute(attribute);

        return updateAttribute;
    } 
}