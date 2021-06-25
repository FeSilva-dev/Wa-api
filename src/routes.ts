import { Router } from 'express';
import { ExamContrller } from './controllers/ExamController';
import { LabsController } from './controllers/LabsController';

const router = Router();

const labsControler = new LabsController();
const examController = new ExamContrller();

router.get("/labs/show", labsControler.show);
router.post("/labs", labsControler.create);
router.get("/exam/show", examController.show);
router.post("/exam", examController.create);

export { router }