import { ProblemRepository } from "../../repos/impl/problemRepoImpl";
import UpdateProblem from "./UpdateProblem";
import { UpdateProblemController } from "./UpdateProblemController";
import { ProblemModel } from "../../../../shared/infra/database/models/ProblemModel";

const problemRepo = new ProblemRepository(ProblemModel);
const updateProblemUsecase = new UpdateProblem(problemRepo);
const updateProblemController = new UpdateProblemController(updateProblemUsecase);

export { updateProblemUsecase, updateProblemController };
