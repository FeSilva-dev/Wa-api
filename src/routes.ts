import { Router } from 'express';
import { ExamContrller } from './controllers/ExamController';
import { LabsController } from './controllers/LabsController';

const router = Router();

const labsControler = new LabsController();
const examController = new ExamContrller();

router.get("/labs/show", labsControler.show);
router.get("/labs/show/:id", labsControler.showOne);
router.post("/labs", labsControler.create);
router.delete("/labs/delete/:id", labsControler.delete);
router.put("/labs/update/:id", labsControler.update);
router.get("/exam/show", examController.show);
router.get("/exam/show/:id", examController.showOne);
router.post("/exam", examController.create);
router.delete("/exam/:id", examController.delete);
router.put("/exam/update/:id", examController.update);

export { router }