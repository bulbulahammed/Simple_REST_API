const express = require('express');
const app = express();
const  cors = require('cors');
const bodyParser = require('body-parser');
const users = require("./models/user.model");
const userRouter = require("./routes/users.route");



// user cors
app.use(cors())
// user body parser
app.use(bodyParser.urlencoded({extended:true}))

// Set up home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

// Set the user route
app.use("/users", userRouter)


// Set  Bad URL
app.use((req,res,next)=>{
    res.status(404).json({message:"Route not found"});
});
// Set Server error
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Something Broke"});
});

module.exports = app;