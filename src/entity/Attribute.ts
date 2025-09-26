import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Characters } from "./Characters";

@Entity()
export class Attribute {
    
    @PrimaryGeneratedColumn()
    atrib_id: number;
    
    @Column("int")
    powerAttack: number;

    @Column("int")
    powerMagic: number;

    @Column("int")
    physicalDefense: number

    @Column("int")
    magicalDefense: number

    @Column("int")
    life: number;

    @Column("int")
    mana: number;

    @Column("int")
    criticalDamage: number;

    @Column("int")
    movimentSpeed: number;

    @OneToOne(() => Characters)
    @JoinColumn()
    character: Characters;
    
    constructor(powerAttack?: number, powerMagic?: number, physicalDefense?: number, magicalDefense?: number, life?: number, mana?: number, criticalDamage?: number, movimentSpeed?: number) {
        
        this.powerAttack = powerAttack;
        this.powerMagic = powerMagic;
        this.physicalDefense = physicalDefense;
        this.magicalDefense = magicalDefense;
        this.life = life;
        this.mana = mana;
        this.criticalDamage = criticalDamage;
        this.movimentSpeed = movimentSpeed;
    }
    
    //Função para aumentar o valor dos atributos conforme o personagem evolui.
    evoluir(nivel: number) {
        this.powerAttack += nivel * 10;
        this.life += nivel * 20;
        this.mana += nivel * 5;
    }
}