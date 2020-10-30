import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'



@Entity('entrada')
export class EntradaEntity extends BaseEntity{

@PrimaryGeneratedColumn()
id:number

@Column({type:'date'})
data:Date

@Column()
origem:string

@Column({type:'integer'})
quantidade:number

}


