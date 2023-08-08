/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import { defineProblemController } from "../../usecases/defineProblem";
import { removeProblemController } from "../../usecases/removeProblem";
import { updateProblemController } from "../../usecases/updateProblem";

const problemRouter = express.Router();

problemRouter
	.post("/", (req: any, res) => defineProblemController.execute(req, res))
	.patch("/:id", (req: any, res) => updateProblemController.execute(req, res))
	.delete("/:id", (req: any, res) => removeProblemController.execute(req, res));

export { problemRouter };
