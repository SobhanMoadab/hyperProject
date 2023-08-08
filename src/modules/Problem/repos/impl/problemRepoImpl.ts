import { UnexpectedError } from "../../../../shared/core/AppError";
import { DefineProblemDTO } from "../../usecases/defineProblem/DefineProblemDTO";
import { ProblemNotFound } from "../../usecases/getProblem/GetProblemErrors";
import { IProblemRepository, IProblem } from "../IProblemRepository";
import { Model } from "mongoose";

export class ProblemRepository implements IProblemRepository {
	private _problemModel: Model<DefineProblemDTO>;

	constructor(schemaModel: Model<DefineProblemDTO>) {
		this._problemModel = schemaModel;
	}

	async save(problem: any): Promise<IProblem> {
		const result = await this._problemModel.create(problem);
		return { name: result.name, id: result._id.toString() };
	}
	async remove(id: string): Promise<void> {
		await this._problemModel.findByIdAndDelete(id);
		return;
	}

	async update({ id, problem }: { id: string; problem: any }): Promise<IProblem> {
		try {
			const result = await this._problemModel.findByIdAndUpdate(id, problem, { new: true });
			if (result) {
				return { name: result.name, id: result.id };
			} else {
				throw new UnexpectedError("something went wrong");
			}
		} catch (error) {
			throw new UnexpectedError(error);
		}
	}
	async getOne(id: string): Promise<IProblem> {
		try {
			const result = await this._problemModel.findById(id);
			if (result) {
				return { name: result.name, id: result.id };
			} else {
				throw new ProblemNotFound(id);
			}
		} catch (error) {
			throw new UnexpectedError(error);
		}
	}
}
