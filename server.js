const express=require('express');
const colors=require('colors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const connectDB = require('./config/db');


//dotenv config
dotenv.config();

//mogodb connection
connectDB();

const app=express()

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user',require("./routes/userRoutes"))

//listen port
const port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log(
        `server running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
});