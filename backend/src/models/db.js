import mongoose from 'mongoose'

export async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to MongoDB successfully !")
    } catch (error) {
        console.log("Connection Failed",error.message)
    }
}