import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CharacterItem } from "./CharacterItem";

@Entity()
export class Characters /*extends Dados*/ {
    
    @PrimaryGeneratedColumn()
    charac_id: number;
    
    @Column()
    nome: string;

    @Column()
    positions: string | null;

    // Um Character(Personagem) pode estar associado a varios Character_Item (Ou seja um personagem pode ter varios item)
    @OneToMany(() => CharacterItem, (characterItem) => characterItem.characters)
    characterItem: CharacterItem[];


    constructor(nome?: string, positions?: string /*atributos?: Atributo[]*/) {
        this.nome = nome;
        
        this.positions = positions || null;
        //super(nome);
        //this.atributos = atributos;
    }

}