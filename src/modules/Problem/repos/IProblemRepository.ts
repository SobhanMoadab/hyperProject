import Problem from "../domain/Problem";

export interface IProblem {
	name: string;
	id: string;
}
export interface IProblemRepository {
	save(problem: Problem): Promise<Problem>;
	remove(id: string): Promise<void>;
	update({ id, problem }: { id: string; problem: any }): Promise<IProblem>;
	getOne(id: string): Promise<IProblem>;
	getList(): Promise<IProblem[]>;
}
