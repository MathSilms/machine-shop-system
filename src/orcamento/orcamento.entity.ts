import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('orcamento')

export class OrcamentoEntity extends BaseEntity {

@PrimaryGeneratedColumn()
id:number

@Column()
name_usuario:string

@Column()
email_usuario:string

@Column()
telefone_usuario:string

@Column()
id_cliente:number

@Column()
nome_cliente:number

@Column()
telefone_cliente:string

@Column()
email_cliente:string

@Column()
placa:string

@Column()
modelo:string

@Column()
peca:string

@Column()
quantidade:string

@Column()
status:boolean

@Column()
servico:string

@Column()
preco:number

@CreateDateColumn()
created_at:Date

@UpdateDateColumn()
updated_at:Date

}