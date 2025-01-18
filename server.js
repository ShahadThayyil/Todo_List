const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/userRoutes.js")
const PORT = 3000;
const app = express();
const DB_URL = 'mongodb://localhost:27017/todoDB';
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs");
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("DB successfully connected to the server")})
.catch((err)=>{console.log("Error connecting to the database", err)});
app.use('/',todoRoutes);
app.listen(PORT,(err)=>{
    if(err){
        console.log("An error founded please recheck your code",err);
    }else{
        console.log("Server successfully started on port",PORT);
    }
})