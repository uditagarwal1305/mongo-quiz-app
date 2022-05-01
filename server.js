const express = require("express");
const app= express();
const cors=require  ("cors");
const mongoose= require("mongoose");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://quizadmin:redhat@cluster0.8cuzu.mongodb.net/quizDB")

app.use("/", require("./routes/quizRoutes"));

app.listen(3001, function(){
    console.log("Express running");

})
