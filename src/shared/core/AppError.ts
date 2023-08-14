import { Result } from "./Result";
import { UseCaseError } from "./UseCaseError";

export class UnexpectedError extends Result<UseCaseError> {
	public constructor(err: any) {
		super(false, {
			message: `An unexpected error occurred.`,
			error: err,
		} as UseCaseError);
	}

	public static create(err: any): UnexpectedError {
		return new UnexpectedError(err);
	}
}
export class BadRequestError extends Result<UseCaseError> {
	public constructor(fields?: Array<string>) {
		let errorMessage = '';
		if (fields && fields.length > 0) {
			errorMessage += ` Invalid fields: ${fields.join(', ')}.`;
		}
		super(false, {
			message: `Bad Request`,
		} as UseCaseError);
	}
}
export class NotFound404 extends Result<UseCaseError> {
	public constructor() {
		super(false, {
			message: `Could not find anything.`,
		} as UseCaseError);
		console.log(`[AppError]: An unexpected error occurred`);
	}
}
