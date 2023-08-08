import { Request, Response } from "express";
import { RemoveProblemDTO } from "./RemoveProblemDTO";
import RemoveProblem from "./RemoveProblem";
import { ProblemNotFound } from "./RemoveProblemErrors";

interface ExpressRequest extends Request {}

export class DefineProblemController {
	constructor(private useCase: RemoveProblem) {}

	async execute(req: ExpressRequest, res: Response) {
		let dto: RemoveProblemDTO = req.params as RemoveProblemDTO;
		dto = {
			id: dto.id,
		};
		try {
			const result = await this.useCase.execute(dto);
			// console.log(result.value);
			if (result.isLeft()) {
				const error = result.value;

				if (error instanceof ProblemNotFound) {
					return res.status(404).json({ status: 404, msg: error.message });
				} else {
					return res.status(500).json({ msg: "Something went wrong" });
				}
			} else {
				return res.status(201).json({ status: 201, msg: "Successful" });
			}
		} catch (err) {
			return res.status(500).json({ msg: "Something went wrong" });
		}
	}
}
