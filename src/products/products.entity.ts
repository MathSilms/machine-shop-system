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
  
  @Entity()
  export class Products extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
    
    @Column({ nullable: false, type: 'varchar', length: 200 })
    marca: string;

    @Column({ nullable: false, type: 'varchar', length: 200  })
    modelo: string;
    
    @Column({ nullable: false, type: 'varchar', length: 200  })
    descricao: string;
    
    @Column({ nullable: false, type: 'integer'})
    quantidade: number;
    
    @Column({ nullable: false, type: 'float' })
    preco: number;
    
    @Column({ nullable: false, type: 'integer' })
    id_fornecedor: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }