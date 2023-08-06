import { DefineProblemDTO } from "../../usecases/defineProblem/DefineProblemDTO";
import { IProblemRepository } from "../IProblemRepository";
import { Model } from "mongoose";


export class ProblemRepository implements IProblemRepository {
    private _problemModel: Model<DefineProblemDTO>

    constructor(
        schemaModel: Model<DefineProblemDTO>,
    ) {
        this._problemModel = schemaModel
    }

    async save(problem: any): Promise<void> {
        await this._problemModel.create(problem)
        return
    }
}