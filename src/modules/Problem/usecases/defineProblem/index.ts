import { ProblemRepository } from "../../repos/impl/problemRepoImpl";
import DefineProblem from "./DefineProblem";
import { DefineProblemController } from "./DefineProblemController";
import { ProblemModel } from "../../../../shared/infra/database/models/ProblemModel";

const problemRepo = new ProblemRepository(ProblemModel);
const defineProblemUsecase = new DefineProblem(problemRepo);
const defineProblemController = new DefineProblemController(defineProblemUsecase);

export { defineProblemUsecase, defineProblemController };
