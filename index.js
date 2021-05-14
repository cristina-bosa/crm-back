const express = require('express');
const cors = require ('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


//evita que el bodu llegue vacio
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL);

const customersRouter = require('./resources/customers/customers.router');

app.use('/customers',customersRouter);


app.listen(3000, (error)=>{
    if(error){
        console.error({error})
    }else{
        console.log("Server on port 3000");
    }
})