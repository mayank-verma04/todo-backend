const mongoose= require("mongoose");
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo DB Connected");
    }
    catch(err){
        console.error("Mongo DB not connected")
    }
}
module.exports= connectDB;