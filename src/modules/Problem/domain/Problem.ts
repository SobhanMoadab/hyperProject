import { Guard } from "../../../shared/core/Guard";
import { Result} from "../../../shared/core/Result";
import * as crypto from "crypto";

export interface ProblemProps {
    name: string
}
export default class Problem {
    constructor(private props: ProblemProps, private _id?: string) {
        if (!_id) this._id = crypto.randomBytes(16).toString()
    }

    get id() {
        return this._id;
    }

    public static create(props: ProblemProps, id?: string) {
        const isValid = Guard.againstNullOrUndefinedBulk([
            { argument: props.name, argumentName: 'name' },
        ])
        if (isValid.isFailure) return Result.fail<Problem>(isValid.getErrorValue())
        const result = new Problem(props, id)
        return Result.ok<Problem>(result)
    }
}