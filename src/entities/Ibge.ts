import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('IBGE')
export default class Ibge {
  @PrimaryColumn()
  ID: string;

  @Column()
  CITY: string;

  @Column()
  UF: string;

}