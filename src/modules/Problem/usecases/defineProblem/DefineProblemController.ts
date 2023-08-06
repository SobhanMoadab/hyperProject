import { Request, Response } from "express";
import { DefineProblemDTO } from "./DefineProblemDTO";
import DefineProblem from "./DefineProblem";
import { UnexpectedError } from "../../../../shared/core/AppError";


interface ExpressRequest extends Request { }

export class DefineProblemController {
    constructor(private useCase: DefineProblem) { }

    async execute(req: ExpressRequest, res: Response) {
        let dto: DefineProblemDTO = req.body as DefineProblemDTO
        dto = {
            name: req.body.name
        }
        try {
            const result = await this.useCase.execute(dto)
            if (result.isLeft()) {
                const error = result.value

                switch (error.constructor) {
                    case UnexpectedError:
                        return res.status(500).json({ status: 500, msg: error })
                    default:
                        return res.status(500).json({ msg: 'Something went wrong' })
                }
            } else {
                return res.status(201).json({ status: 201, msg: 'Successful' })
            }

        } catch (err) {
            return res.status(500).json({ msg: 'Something went wrong' })
        }
    }
}