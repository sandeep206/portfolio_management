import { Router } from 'express'
import {
  getEmployees,
  createEmployee,
  updateEmployee
} from './employee.controller'

const router = Router()

// /api/employee

router
  .route('/')
  .get(getEmployees)
  .post(createEmployee)

router.route('/:id').put(updateEmployee)

export default router
