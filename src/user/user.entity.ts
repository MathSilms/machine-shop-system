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
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
    
    @Column({ nullable: false, type: 'varchar', length: 200 })
    email: string;

    @Column({ nullable: false, type: 'varchar', length: 200  })
    password: string;
    
    @Column({ nullable: false, type: 'varchar', length: 200 })
    cpf: string;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column({ nullable: true, type: 'date', length: 200 })
    deleted_at: Date;
  }