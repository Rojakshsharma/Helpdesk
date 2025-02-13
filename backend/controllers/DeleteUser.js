import userModel from "../Schema/userModel.js"
const deleteUser = async (req,res)=>{
    try {
        const {email} = req.body
       if(email!==undefined){
        const data = await userModel.findOneAndDelete({email})
        res.json({success:true,message:"data deleletd successfully"})
       }
       else{
        console.log('error' , email)
        res.json({success:false,message:"something happened"})
       }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"something happened"})
    }
}

export default deleteUser