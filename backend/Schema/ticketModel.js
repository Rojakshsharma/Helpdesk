import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title:{type:String,required:true},
    query:{type:String,required:true},
    date:{type:Date,required:true,default:Date.now},
    status:{type:String,required:true,default:'pending'},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
})

const ticketModel = mongoose.models.ticket || mongoose.model('ticket',ticketSchema)
export default ticketModel