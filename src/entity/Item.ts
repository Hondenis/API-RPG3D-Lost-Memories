import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CharacterItem } from "./CharacterItem";

@Entity()
export class Item {
    
    @PrimaryGeneratedColumn()
    item_id: number;

    @Column()
    tipo_item: string;

    // Um item pode estar associado a vários Character_Item (Relação um-para-muitos)
    @OneToMany(() => CharacterItem, (characterItem) => characterItem.items)
    characterItem: CharacterItem[]

    constructor(tipo_item?: string) {
        this.tipo_item = tipo_item;
    }
}