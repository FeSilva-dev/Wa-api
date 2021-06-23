import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity("labs")
class Labs{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  address: object;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Labs}