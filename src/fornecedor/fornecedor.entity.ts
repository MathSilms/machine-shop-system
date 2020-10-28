import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn, 

    //OneToMany
  } from 'typeorm';
  
  @Entity('fornecedor')
  //@Unique()
  export class FornecedorEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ nullable: false, type: 'varchar'})
    name: string;
    
    @Column({ nullable: false, type: 'varchar'})
    telefone: string;

    @Column({ nullable: true, type: 'varchar'})
    telefone2: string;
    
    @Column({ nullable: false, type: 'varchar'})
    cnpj: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ nullable: true, type: 'date'})
    deleted_at: Date;
  }