import { Repository } from "typeorm";
import { Characters } from "../entity/Characters";
import { AppDataSource } from "../data_source";

export class CharacterRepository {
    private characterRepository: Repository<Characters>;

    constructor(){
        this.characterRepository = AppDataSource.getRepository(Characters);
    }

   async addCharacter(characters: Characters): Promise<Characters>{
    return await this.characterRepository.save(characters);
   }


   async findByName(nome: string): Promise<Characters | null> {
    return await this.characterRepository.findOne({ where: { nome }});
   }
   
   /*async getCharacter(): Promise<Characters | undefined> {
    const character = await this.characterRepository
    .createQueryBuilder("character")
   .getWithName("Azarion")
   .getOne()
    return character
   }
    */

    // Método para pegar um personagem aleatório do banco de dados
   async getRandomCharacter(): Promise<Characters | undefined> {
    const character = await this.characterRepository
    .createQueryBuilder("character")
    .orderBy("RAND()")
    .getOne();
    return character
   }

   // Método para salvar a posição
   async updatePosition(charac_id: number, position: string): Promise<Characters> {
    
    console.log("[REPOSITORY] Atualizando posição para ID:", charac_id);

    await this.characterRepository.update( { charac_id }, {positions: position}
    );

    const updateCharacter = await this.characterRepository.findOne( { where: { charac_id }});
    console.log("[REPOSITORY] Dados atualizados", updateCharacter);

    if (!updateCharacter) {
        throw new Error("Personagem não encontrado após atualização");
    }
    return updateCharacter;
    }
}