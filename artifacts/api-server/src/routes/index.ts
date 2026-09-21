import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import adminRouter from "./admin";
import uploadRouter from "./upload";
import careersRouter from "./careers";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(adminRouter);
router.use(uploadRouter);
router.use(careersRouter);

export default router;
