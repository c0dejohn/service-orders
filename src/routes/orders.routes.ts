import { Router } from 'express'
const orderRouter = Router()
import OrderController from '../controllers/order.controller'

const order = new OrderController()

orderRouter.get('/', order.list)
orderRouter.post('/', order.createOrder)
orderRouter.put('/:id', order.update)
orderRouter.delete('/:id', order.destroy)
orderRouter.get('/:id?', order.getById)

export default orderRouter