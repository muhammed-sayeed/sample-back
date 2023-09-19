import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express()

dotenv.config()

mongoose.connect(process.env.database)
mongoose.connection.on('connected',()=>{
    console.log('database connected');
})

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))

const corsOptions = {
    origin: ["https://muhammed-sayeed.github.io", "http://localhost:4200"],
    methods: "GET, POST, PUT, DELETE, PATCH",
    allowedHeaders: "Content-Type, Authorization",
    optionsSuccessStatus: 200,
  };  
  app.use(cors(corsOptions));

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running on PORT ${port}`);
})

import  routes  from './routes/routes.js'
app.use('/',routes)