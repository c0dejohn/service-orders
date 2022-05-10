import { Router } from 'express'
const technicianRouter = Router()
import TechnicianController from '../controllers/technician.controller'

const technician = new TechnicianController()

technicianRouter.get('/', technician.list)
technicianRouter.post('/', technician.createTechnician)
technicianRouter.put('/:id', technician.update)
technicianRouter.delete('/:id', technician.destroy)
technicianRouter.get('/:id?', technician.getById)

export default technicianRouter