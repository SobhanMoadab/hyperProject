import { Request, Response } from "express";
import { GetProblemDTO } from "./GetProblemDTO";
import GetProblem from "./GetProblem";
import { ProblemNotFound } from "./GetProblemErrors";

interface ExpressRequest extends Request {}

export class GetProblemController {
	constructor(private useCase: GetProblem) {}

	async execute(req: ExpressRequest, res: Response) {
		let dto: GetProblemDTO = req.params as GetProblemDTO;
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
				return res
					.status(201)
					.json({ status: 201, msg: "Successful", data: result.value.getValue() });
			}
		} catch (err) {
			return res.status(500).json({ msg: "Something went wrong" });
		}
	}
}
