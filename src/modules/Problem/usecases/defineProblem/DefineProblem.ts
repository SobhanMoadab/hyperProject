import { BadRequestError, UnexpectedError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import Problem from "../../domain/Problem";
import { IProblemRepository, IProblem } from "../../repos/IProblemRepository";
import { DefineProblemDTO } from "./DefineProblemDTO";
import { DuplicateProblemError } from "./DefineProblemErrors";

type Response = Either<DuplicateProblemError | UnexpectedError | BadRequestError, Result<Problem>>;

export default class DefineProblem {
	constructor(public problemRepo: IProblemRepository) { }

	async execute(req: DefineProblemDTO): Promise<Response> {
		let dto = req as DefineProblemDTO;
		dto = {
			name: dto.name,
		};
		try {
			// Create Problem Aggregate out of DTO
			const problemOrError = Problem.create(dto)
			if (problemOrError.isFailure) {
				return left(new BadRequestError())
			}
			const problem = problemOrError.getValue()
			const result = await this.problemRepo.save(problem);
			return right(Result.ok(result));
		} catch (err) {
			return left(new UnexpectedError("Something went wrong"));
		}
	}
}
