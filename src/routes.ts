import { Router } from 'express';
import { LabsController } from './controllers/LabsController';

const router = Router();

const labsControler = new LabsController()

router.get("/labs/show", labsControler.show);
router.post("/labs", labsControler.create);

export { router }