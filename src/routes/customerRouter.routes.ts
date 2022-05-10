import { Router } from 'express'
const customerRouter = Router()
import CustomerController from '../controllers/customer.controller'

const customer = new CustomerController()

customerRouter.get('/', customer.list)
customerRouter.post('/', customer.createCustomer)
customerRouter.put('/:id', customer.update)
customerRouter.delete('/:id', customer.destroy)
customerRouter.get('/:id?', customer.getById)

export default customerRouter