import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/authRoute.js"
import usersRoute from "./routes/usersRoute.js"
import hotelsRoute from "./routes/hotelsRoute.js"
import roomsRoute from "./routes/roomsRoute.js"
const app = express()
dotenv.config()

const connect= async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB is connected");
    }
    catch(err){
        throw err;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB is disconnected!")
})

app.listen(8800,()=>{
    connect();
    console.log("Connected to back-end");
})

//middlewares

app.use(express.json())

app.use('/api/auth',authRoute);
app.use('/api/users',usersRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/api/rooms',roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong !"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})


app.get('/users',(req,res)=>{
    res.send("helloooooo first request")
})
