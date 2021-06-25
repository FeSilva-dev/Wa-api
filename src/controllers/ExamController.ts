import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Exam } from "../models/Exam";

class ExamContrller {
  async create(request: Request, response: Response) {
    const { name, type, isActive, labsId } = request.body;

    const examRepository = getRepository(Exam);

    try {
      const exam = examRepository.create({
        name,
        type,
        isActive,
      });

      await examRepository.save(exam);

      return response.status(201).json(exam);
    } catch {
      return response
        .status(400)
        .json({ error: "Error when trying to register a new exam! " });
    }
  }

  async show(request: Request, response: Response){
    const examRepository = getRepository(Exam);

    try{
      const all = await examRepository.find();

      return response.status(200).json(all);
    }catch{
      return response.status(400).json({error: "Failed to get all exams!"});
    }
  }

  async showOne(request: Request, response: Response){
    const {id} = request.params;
    const examRepository = getRepository(Exam);

    try{
      const examSingle = await examRepository.find({where: {id}});

      return response.status(200).json(examSingle);
    }catch{
      return response.status(400).json({error: "Failed to get exam!"});
    }
  }

  async delete(request: Request, response: Response){
    const {id} = request.params;
    const examRepository = getRepository(Exam);

    try{
      await examRepository.delete({id});

      return response.status(200).json({message: "Successfull"});

    }catch{
      return response.status(400).json({erro: "Failed do delete this exam!"});
    }
  }

  async update(request: Request, response: Response){
    const {id} = request.params;
    const {name, type, isActive} = request.body;
    const examRepository = getRepository(Exam);

    try{
      await examRepository.update(
        id,
        {
          name, type, isActive
        }
      )

      const updated = await examRepository.findOne(id)

      return response.status(200).json(updated)

    }catch{
      return response.status(400).json({error: "Failed update this lab!"});
    }
  }
}

export {ExamContrller}