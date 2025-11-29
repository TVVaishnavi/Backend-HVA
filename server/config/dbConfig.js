const mongoose= require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL,{
            serverSelectionTimeoutMS:5000,
        })
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
