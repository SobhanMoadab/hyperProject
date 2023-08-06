import { Schema, model } from "mongoose"
import { DefineProblemDTO } from "../../../../modules/Problem/usecases/defineProblem/DefineProblemDTO"

export const Problem = new Schema<DefineProblemDTO>({
    name: { type: String, required: true },

}, { timestamps: true })

const ProblemModel = model<DefineProblemDTO>('Problem', Problem)

export {
    ProblemModel
}