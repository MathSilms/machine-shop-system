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
  @Unique(['email'])
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column({ nullable: true, type: 'varchar', length: 200 })
    name: string;
    
    @Column({ nullable: true, type: 'varchar', length: 200 })
    email: string;

    @Column({ nullable: true, type: 'varchar', length: 200  })
    password: string;
    
    @Column({ nullable: false, type: 'varchar', length: 200 })
    cpf: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }