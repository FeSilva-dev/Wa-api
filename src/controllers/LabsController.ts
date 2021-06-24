import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Labs } from "../models/Labs";

class LabsController {
  async create(request: Request, response: Response){
    const {name, address, isActive} = request.body;

    const labsRepository = getRepository(Labs);

    try{
      const labAlreadyExists = await labsRepository.findOne({
        name
      });
  
      if(labAlreadyExists){
        return response.status(400).json({
          error: "Lab already exists!"
        });
      }
  
      const labs = labsRepository.create({
        name,
        address,
        isActive
      });
  
      await labsRepository.save(labs);
  
      return response.status(201).json(labs);
    }catch{
      return response.status(400).json({error: "Error when trying to register a new lab!"})
    }
  }

  async show(request: Request, response: Response){
    const labsRepository = getRepository(Labs);

    try{
      const all = await labsRepository.find()

      return response.status(200).json(all)
    }catch{
      return response.status(400).json({error: "Failed to get all labs!"})
    }
  }
}

export {LabsController}