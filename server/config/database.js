const mongoose = require('mongoose')

//connected to the database from the mongoDB Atlas, and the the URL from the .nev file
const URL = process.env.MONGO_URL;
mongoose.connect(URL,()=>{
    try{
        console.log('Connected to Database');

    }catch(error){
        console.log(error);
    }
})