import { UnexpectedError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import { IProblem, IProblemRepository } from "../../repos/IProblemRepository";
import { GetProblemListDTO } from "./GetProblemListDTO";
import { ListIsEmpty } from "./GetProblemListErrors";

type Response = Either<ListIsEmpty | UnexpectedError, Result<IProblem[]>>;

export default class GetProblemList {
	constructor(public problemRepo: IProblemRepository) {}
	async execute(req: GetProblemListDTO): Promise<Response> {
		// let dto = req as GetProblemListDTO;
		try {
			try {
				const result = await this.problemRepo.getList();
				return right(Result.ok(result));
			} catch (error) {
				return left(new ListIsEmpty());
			}
		} catch (error) {
			return left(new UnexpectedError("Something went wrong"));
		}
	}
}
