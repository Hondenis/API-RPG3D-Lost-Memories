import {Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Characters } from "./Characters";
import { Item } from "./Item";

// Retirar a herança com dados nesse contexto não faz sentido, seria melhor interfaçe.
@Entity("Character_item")
export class CharacterItem /*extends Dados*/ {

    @PrimaryGeneratedColumn()
    owner_id: number;

    @Column("int")
    quantidade: number;

    /*
    @Column({
        type: "enum",
        enum: Location
    })
    location: Location;
    */

    // Muitos Character_Item podem estar associados a um Character (Relação muitos-para-um (Ou seja um um Character(Personagem) pode ter varios items))
    @ManyToOne(() => Characters, (characters) => characters.characterItem)
    characters: Characters;

    // Muitos Character_Item podem estar associados a um Item (Relação muitos-para-um)
    @ManyToOne(() => Item, (item) => item.characterItem)
    items: Item

   constructor(nome?: string, owner_id?: number, quantidade?: number) {
    //super(nome);
    this.owner_id = owner_id;
    this.quantidade = quantidade;
   }
}