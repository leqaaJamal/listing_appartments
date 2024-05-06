import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'appartment'})
export class AppartmentEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type:'varchar',nullable: true})
  title?: string;

  @Column({type:'varchar',nullable: true})
  address?: string;

  @Column({type:'varchar',nullable: true})
  description?: string;

  @Column({type:'int',nullable: true})
  floor?: number;

  @Column({type:'int',nullable: true})
  number_of_rooms?: number;

  @Column({type:'decimal',nullable: true})
  area?: number;

  @Column({type:'decimal',nullable: true})
  price?: number;

}
