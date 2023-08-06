import { UnexpectedError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import { IProblemRepository } from "../../repos/IProblemRepository";
import { DefineProblemDTO } from "./DefineProblemDTO";
import { DuplicateProblemError } from "./DefineProblemErrors";

type Response = Either<DuplicateProblemError | UnexpectedError, Result<void>>

export default class DefineProblem {
    constructor(public problemRepo: IProblemRepository) {

    }

    async execute(req: DefineProblemDTO): Promise<Response> {
        let dto = req as DefineProblemDTO
        dto = {
            name: dto.name,
        }
        try {
            await this.problemRepo.save(dto)
            return right(Result.ok())
        } catch (err) {
            return left(new UnexpectedError('Something went wrong'))
        }
    }
}