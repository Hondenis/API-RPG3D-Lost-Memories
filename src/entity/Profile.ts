import { Column, PrimaryGeneratedColumn, } from "typeorm";


export  class Profile {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    nome: string;

    constructor(nome?: string) {
        this.nome = nome;
    }

}