import userModel from "../Schema/userModel.js"
const getUser = async (req,res)=>{
    try {
        const users = await userModel.find()
        console.log(users)
        res.json({success:true,message:"user fetched successfully",users}) 
    } catch (error) {
       console.log(error)
       res.json({success:false,message:"some error occured"}) 
    }
}

export default getUser