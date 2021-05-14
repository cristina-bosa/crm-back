const express = require('express');
const app = express();

app.get('/customers');

app.listen(3000, (error)=>{
    if(error){
        console.error({error})
    }else{
        console.log("Server on port 3000");
    }
})