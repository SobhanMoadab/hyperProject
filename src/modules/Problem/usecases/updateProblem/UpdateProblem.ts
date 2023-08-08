import { UnexpectedError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import { IProblemRepository, IProblem } from "../../repos/IProblemRepository";
import { UpdateProblemDTO } from "./UpdateProblemDTO";
// import { DuplicateProblemError } from "./UpdateProblemErrors";

type Response = Either<UnexpectedError, Result<IProblem>>;

export default class UpdateProblem {
	constructor(public problemRepo: IProblemRepository) {}

	async execute(req: UpdateProblemDTO): Promise<Response> {
		let dto = req as UpdateProblemDTO;
		dto = {
			problem: dto.problem,
			id: dto.id,
		};
		try {
			const result = await this.problemRepo.update(dto);
			return right(Result.ok(result));
		} catch (err) {
			return left(new UnexpectedError("Something went wrong"));
		}
	}
}
