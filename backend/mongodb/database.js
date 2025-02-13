import mongoose from "mongoose"
const connectDB = ()=>{
    mongoose.connect(`${process.env.MONGODB_URL}`).then(()=>{
        console.log('database is connected')
    }).catch((error)=>{
        console.log(error)
    })
}

export default connectDB