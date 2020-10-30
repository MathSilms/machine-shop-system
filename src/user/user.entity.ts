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
  
  @Entity('usuario')
  @Unique(['email'])
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column({ nullable: false, type: 'varchar'})
    name: string;
    
    @Column({ nullable: false, type: 'varchar'})
    email: string;

    @Column({ nullable: false, type: 'varchar'})
    password: string;
    
    @Column({ nullable: false, type: 'varchar'})
    cpf: string;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column({ nullable: true, type: 'date'})
    deleted_at: Date;
  }