import { UnexpectedError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import { IProblem, IProblemRepository } from "../../repos/IProblemRepository";
import { GetProblemDTO } from "./GetProblemDTO";
import { ProblemNotFound } from "./GetProblemErrors";

type Response = Either<ProblemNotFound | UnexpectedError, Result<IProblem>>;

export default class GetProblem {
	constructor(public problemRepo: IProblemRepository) {}

	async execute(req: GetProblemDTO): Promise<Response> {
		let dto = req as GetProblemDTO;
		dto = {
			id: dto.id,
		};

		try {
			try {
				const result = await this.problemRepo.getOne(dto.id);
				return right(Result.ok(result));
			} catch (error) {
				return left(new ProblemNotFound(dto.id));
			}
		} catch (err) {
			return left(new UnexpectedError("Something went wrong"));
		}
	}
}
