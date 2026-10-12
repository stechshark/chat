import express from 'express'
import "dotenv/config"
import { connectDB } from './models/db.js'

const app = express()
const PORT = process.env.PORT

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server up &  running on port 3000")
    })
})