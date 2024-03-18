const express = require('express')
const app = express();
const port = 5000
const routes = require('./Routes/routes')
const connectDB = require('./db')
app.use(express.json())
app.use(express.static('./public'))
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());


app.use('/api' , routes)


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,  console.log('Connected to database and server has started'))
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        global.food_items= data
        const fetched_data1 = await mongoose.connection.db.collection("foodcategory");
        const catdata = await fetched_data1.find({}).toArray();
        global.foodcategory= catdata
        

    } catch (error) {
        console.log(error)
    }
}

start()