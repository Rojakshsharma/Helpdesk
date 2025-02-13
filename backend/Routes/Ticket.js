import express from 'express'
import addTicket from '../controllers/AddTicket.js'
import getTicket from '../controllers/GetTickets.js'
import updateTicket from '../controllers/UpdateTicket.js'


const ticketRouter = express.Router()
ticketRouter.post('/add',addTicket)
ticketRouter.get('/list',getTicket)
ticketRouter.patch('/update',updateTicket)

export default ticketRouter