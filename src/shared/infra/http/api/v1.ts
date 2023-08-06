import { Router } from 'express'
const v1Router = Router()
import { problemRouter } from '../../../../modules/Problem/infra/routes/problemRoute'

v1Router.use('/problems', problemRouter)

export { v1Router }