import { ProblemRepository } from "../../repos/impl/problemRepoImpl";
import RemoveProblem from "./RemoveProblem";
import { DefineProblemController } from "./RemoveProblemController";
import { ProblemModel } from "../../../../shared/infra/database/models/ProblemModel";

const problemRepo = new ProblemRepository(ProblemModel);
const removeProblemUsecase = new RemoveProblem(problemRepo);
const removeProblemController = new DefineProblemController(removeProblemUsecase);

export { removeProblemUsecase, removeProblemController };
