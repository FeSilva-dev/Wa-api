import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'
import { Labs } from "./Labs";

type Lab = {
  name: string;
  address: Address;
  isActive: boolean;
  created_at: Date;
}

type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  zip: string;
}

@Entity("exams")
class Exam{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  lab_id: string;

  @ManyToOne(() => Labs, lab => lab.name, {eager: true})
  @JoinColumn({name: "lab_id"})
  labs: Labs;

  @Column()
  name: string;

  @Column()
  type: string;

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

export {Exam}