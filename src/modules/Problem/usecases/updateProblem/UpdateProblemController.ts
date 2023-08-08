import { Request, Response } from "express";
import { UpdateProblemDTO, UpdateProblemParamsDTO } from "./UpdateProblemDTO";
import UpdateProblem from "./UpdateProblem";
import { UnexpectedError } from "../../../../shared/core/AppError";

interface ExpressRequest extends Request {}

export class UpdateProblemController {
	constructor(private useCase: UpdateProblem) {}

	async execute(req: ExpressRequest, res: Response) {
		const { problem } = req.body as UpdateProblemDTO;
		const { id } = req.params as UpdateProblemParamsDTO;

		const dto: UpdateProblemDTO = {
			problem,
			id,
		};

		try {
			const result = await this.useCase.execute(dto);
			if (result.isLeft()) {
				const error = result.value;
				switch (error.constructor) {
					case UnexpectedError:
						return res.status(500).json({ status: 500, msg: error });
					default:
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
