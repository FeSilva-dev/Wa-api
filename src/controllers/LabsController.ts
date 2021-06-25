import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Labs } from "../models/Labs";

class LabsController {
  async create(request: Request, response: Response) {
    const { name, address, isActive, exameId } = request.body;

    const labsRepository = getRepository(Labs);
    try {
      const labAlreadyExists = await labsRepository.findOne({
        name,
      });

      if (labAlreadyExists) {
        return response.status(400).json({
          error: "Lab already exists!",
        });
      }

      const labs = labsRepository.create({
        name,
        address,
        isActive,
        exam_id: exameId,
      });

      await labsRepository.save(labs);

      return response.status(201).json(labs);
    } catch {
      return response
        .status(400)
        .json({ error: "Error when trying to register a new lab!" });
    }
  }

  async show(request: Request, response: Response){
    const labsRepository = getRepository(Labs);

    try{
      const all = await labsRepository.find()

      return response.status(200).json(all)
    }catch{
      return response.status(400).json({error: "Failed to get all labs"})
    }
  }

  async showOne(request: Request, response: Response){
    const {id} = request.params;
    const labsRepository = getRepository(Labs);

    try{
      const examSingle = await labsRepository.find({where: {id}});

      return response.status(200).json(examSingle);
    }catch{
      return response.status(400).json({error: "Failed to get a lab!"});
    }
  }

  async delete(request: Request, response: Response){
    const {id} = request.params;
    const labsRepository = getRepository(Labs);

    try{
      await labsRepository.delete({id});

      return response.status(200).json({message: "Successfull"});

    }catch{
      return response.status(400).json({erro: "Failed do delete this lab!"});
    }
  }

  async update(request: Request, response: Response){
    const {id} = request.params;
    const {name, address, isActive, exameId} = request.body;
    const labsRepository = getRepository(Labs);

    try{
      await labsRepository.update(
        id,
        {
          name, address, isActive, exam_id: exameId
        }
      )

      const updated = await labsRepository.findOne(id)

      return response.status(200).json(updated)

    }catch{
      return response.status(400).json({error: "Failed update this lab!"});
    }
  }
}

export {LabsController}