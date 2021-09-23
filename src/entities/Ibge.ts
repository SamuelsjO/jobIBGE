import { Column, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuid } from 'uuid';

@Entity('IBGE')
export default class Ibge {
  @PrimaryColumn()
  ID: string;

  @Column()
  CITY: string;

  @Column()
  UF: string;

  constructor(){
    if(!this.ID){
      this.ID = uuid();
    }
  }

}