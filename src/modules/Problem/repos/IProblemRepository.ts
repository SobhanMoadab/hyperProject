export interface ResponseType {
	name: string;
	id: string;
}
export interface IProblemRepository {
	save(problem: any): Promise<ResponseType>;
	remove(id: string): Promise<void>;
}
