import ticketModel from "../Schema/ticketModel.js";
const getTicket = async (req,res)=>{
    try {
        const ticket = await ticketModel.find()
        res.json({success:true,message:"ticket fetched successfully",ticket}) 
    } catch (error) {
       console.log(error)
       res.json({success:false,message:"some error occured"}) 
    }
}

export default getTicket