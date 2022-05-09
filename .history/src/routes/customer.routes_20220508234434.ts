import { Router } from 'express'
const cartRouter = Router()
import Customer from '../controllers/customer.controller'

const customer = new Customer()

cartRouter.get('/listar', async (req, res) => {
    try {
        const result = await customer.listarcustomer()
        result === undefined
            ? res.send({ error: 'no hay customers cargados' })
            : res.send(result)
    } catch (error) {
        res.send(error)
    }
})

cartRouter.get('/listar/:id?', async (req, res) => {
    try {
        const id = req.params.id ?? '0'
        const result = await customer.mostrarcustomer(id)

        result !== undefined
            ? res.send(result)
            : res.send({ error: 'customer no encontrado' })
    } catch (error) {
        res.send(error)
    }
})

cartRouter.post('/agregar', async (req: any, res: any) => {
    try {
        const { id, title, quantity, price } = await req.body
        const result = await customer.agregarcustomer(id, title, quantity, price)
        result !== undefined ? res.status(201).send(result) : res.send(null)
    } catch (error) {
        res.send(error)
    }
})

cartRouter.delete(`/borrar/:id`, (req: any, res: any) => {
    const id = req.params.id
    res.send(customer.eliminarcustomer(id))
})
export default cartRouter