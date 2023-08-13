import { ProblemModel } from "../../../../shared/infra/database/models/ProblemModel";
import { ProblemRepository } from "../../repos/impl/problemRepoImpl";
import GetProblemList from "./GetProblemList";
import { GetProblemListController } from "./GetProblemListController";

const problemRepo = new ProblemRepository(ProblemModel);
const getProblemListUsecase = new GetProblemList(problemRepo);
const getProblemListController = new GetProblemListController(getProblemListUsecase);
export { getProblemListUsecase, getProblemListController };
