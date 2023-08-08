export class ProblemNotFound extends Error {
	constructor(id: string) {
		super(`problem with id: ${id} did not found`);
	}
}
