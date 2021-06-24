import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  zip: string;
}

@Entity("labs")
class Labs{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column("simple-json")
  address: Address | null;

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