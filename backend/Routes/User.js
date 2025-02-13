import express from 'express'
import addUser from '../controllers/AddUser.js'
import getUser from '../controllers/GetUser.js'
import deleteUser from '../controllers/DeleteUser.js'

const userRouter = express.Router()

userRouter.post('/add',addUser)
userRouter.get('/list',getUser)
userRouter.post('/delete',deleteUser)

export default userRouter