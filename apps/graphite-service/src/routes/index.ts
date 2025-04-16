import { Router } from 'express'
import { getReferenceTables } from '../handler/reference'

const router: Router = Router()

router.get('/reference-tables', getReferenceTables)

export default router