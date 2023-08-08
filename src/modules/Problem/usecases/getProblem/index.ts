import { ProblemRepository } from "../../repos/impl/problemRepoImpl";
import GetProblem from "./GetProblem";
import { GetProblemController } from "./GetProblemController";
import { ProblemModel } from "../../../../shared/infra/database/models/ProblemModel";

const problemRepo = new ProblemRepository(ProblemModel);
const getProblemUsecase = new GetProblem(problemRepo);
const getProblemController = new GetProblemController(getProblemUsecase);

export { getProblemUsecase, getProblemController };
