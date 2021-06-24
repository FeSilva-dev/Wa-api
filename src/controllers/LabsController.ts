import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Labs } from "../models/Labs";

class LabsController {
  async create(request: Request, response: Response){
    const {name, address, isActive} = request.body;

    const labsRepository = getRepository(Labs);

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

  }
}

export {LabsController}