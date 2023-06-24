import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5500
const DB_URL = process.env.DB_URL

app.use(cors())
app.use(express.json())

mongoose.connect(DB_URL)
.then(()=>console.log('Database connected'))
.catch(err=> console.log(err))

app.listen(PORT, ()=> console.log(`server in startred in ${PORT}`))