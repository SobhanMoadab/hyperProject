import { UnexpectedError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import { IProblemRepository } from "../../repos/IProblemRepository";
import { RemoveProblemDTO } from "./RemoveProblemDTO";
import { ProblemNotFound } from "./RemoveProblemErrors";

type Response = Either<ProblemNotFound | UnexpectedError, Result<void>>;

export default class RemoveProblem {
	constructor(public problemRepo: IProblemRepository) {}

	async execute(req: RemoveProblemDTO): Promise<Response> {
		let dto = req as RemoveProblemDTO;
		dto = {
			id: dto.id,
		};

		try {
			try {
				await this.problemRepo.remove(dto.id);
				return right(Result.ok());
			} catch (error) {
				return left(new ProblemNotFound(dto.id));
			}
		} catch (err) {
			return left(new UnexpectedError("Something went wrong"));
		}
	}
}
