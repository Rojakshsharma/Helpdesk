import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './mongodb/database.js'
import userRouter from './Routes/User.js'
import ticketRouter from './Routes/Ticket.js'
const app = express()
const port = process.env.PORT ||  8000

app.use(express.json())
app.use(cors())
connectDB();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/api/user/',userRouter)
app.use('/api/ticket',ticketRouter)

app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})