import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
    // OneToMany
  } from 'typeorm';
  
  @Entity()
  @Unique(['email'])
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
    
    @Column({ nullable: true, type: 'varchar', length: 200 })
    email: string;

    @Column({ nullable: true, type: 'varchar', length: 200 })
    password: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

//     @OneToMany(() => Adress, adress => adress.student_id)
//     adress: Adress;
//   }
  }