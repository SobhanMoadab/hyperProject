import { Request, Response } from "express";
import GetProblemList from "./GetProblemList";
import { GetProblemListDTO } from "./GetProblemListDTO";
import { ListIsEmpty } from "./GetProblemListErrors";

interface ExpressRequest extends Request {}

export class GetProblemListController {
	constructor(private useCase: GetProblemList) {}

	async execute(req: ExpressRequest, res: Response) {
		let dto: GetProblemListDTO = req;

		try {
			const result = await this.useCase.execute(dto);

			if (result.isLeft()) {
				const error = result.value;
				if (error instanceof ListIsEmpty) {
					return res.status(405).json({ status: 405, msg: error.message });
				} else {
					return res.status(500).json({ msg: "Something went wrong" });
				}
			} else {
				return res.status(201).json({
					status: 201,
					msg: "Successful",
					data: result.value.getValue(),
				});
			}
		} catch (error) {
			return res.status(500).json({ msg: "Something went wrong" });
		}
	}
}
