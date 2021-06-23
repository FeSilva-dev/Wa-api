import { Router } from 'express';
import { LabsController } from './controllers/LabsController';

const router = Router();

const labsControler = new LabsController()

router.post("/labs", labsControler.create);

export { router }