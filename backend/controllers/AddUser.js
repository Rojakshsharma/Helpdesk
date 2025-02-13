import userModel from "../Schema/userModel.js"
const addUser = async (req,res)=>{
    try {
        const {firstname,lastname,age,gender,email,phone,address} = req.body
        const userData = {
            firstname,
            lastname,
            age,
            gender,
            email,
            phone,
            address
        }

        const newUser = new userModel(userData)
        await newUser.save()

        res.json({success:true,message:'User is created'})
    } catch (error) {
        console.log('error in creating user',error)
        res.json({ success: false, message: error.message })
    }
}

export default addUser