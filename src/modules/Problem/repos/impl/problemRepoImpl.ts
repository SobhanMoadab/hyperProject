import { DefineProblemDTO } from "../../usecases/defineProblem/DefineProblemDTO";
import { IProblemRepository, ResponseType } from "../IProblemRepository";
import { Model } from "mongoose";

export class ProblemRepository implements IProblemRepository {
	private _problemModel: Model<DefineProblemDTO>;

	constructor(schemaModel: Model<DefineProblemDTO>) {
		this._problemModel = schemaModel;
	}

	async save(problem: any): Promise<ResponseType> {
		const result = await this._problemModel.create(problem);
		return { name: result.name, id: result._id.toString() };
	}
	async remove(id: string): Promise<void> {
		await this._problemModel.findByIdAndDelete(id);
		return;
	}
}
