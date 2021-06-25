import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Exam } from "../models/Exam";
import { Labs } from "../models/Labs";

class ExamContrller {
  async create(request: Request, response: Response){ 
    const {name, type, isActive, labsId} = request.body;

    const examRepository = getRepository(Exam);
    const labsRepository = getRepository(Labs)

    try{
      const exam = examRepository.create({
        name,
        type,
        isActive,
        lab_id: labsId
      });

      await examRepository.save(exam);

      // const examUsingFind = await examRepository.find({where: {id: exam.id}})

      return response.status(201).json(exam);
    }catch{
      return response.status(400).json({error: "Error when trying to register a new exam! "});
    }
  }

  async show(request: Request, response: Response){
    const examRepository = getRepository(Exam);

    try{
      const all = await examRepository.find();

      return response.status(200).json(all)
    }catch{
      return response.status(400).json({error: "Failed to get all exams!"});
    }
  }
}

export {ExamContrller}