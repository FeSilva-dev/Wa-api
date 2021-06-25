import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid} from 'uuid'
import { Exam } from "./Exam";

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
  exam_id: string;

  @Column()
  name: string;

  @Column("simple-json")
  address: Address | null;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Exam, exam => exam.id)
  @JoinColumn({name: 'exam_id'})
  exams: Exam;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Labs}