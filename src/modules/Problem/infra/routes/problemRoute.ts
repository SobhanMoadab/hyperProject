/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import { defineProblemController } from "../../usecases/defineProblem";
import { removeProblemController } from "../../usecases/removeProblem";

const problemRouter = express.Router();

problemRouter.post("/", (req: any, res) => defineProblemController.execute(req, res));
problemRouter.delete("/:id", (req: any, res) => removeProblemController.execute(req, res));

export { problemRouter };
