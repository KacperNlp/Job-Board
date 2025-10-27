import { Router } from "express";
import jobsRouter from "./jobs";
import usersRouter from "./users";

const router = Router();

router.use("/jobs", jobsRouter);
router.use("/users", usersRouter);

export default router;
