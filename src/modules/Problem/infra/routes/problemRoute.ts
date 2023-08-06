/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { defineProblemController } from '../../usecases/defineProblem'

const problemRouter = express.Router()

problemRouter.post('/', (req: any, res) => defineProblemController.execute(req, res))

export { problemRouter }