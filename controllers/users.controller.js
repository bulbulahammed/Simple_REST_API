const {v4:uuidv4} = require("uuid");
let users = require("../models/user.model");

// get all users
const getAllUsers = (req,res)=>{
    res.status(200).json({users});
};
// Create a new user
const createUser = (req,res)=>{
    const newUser = {
        id: uuidv4(),
        username : req.body.username,
        email : req.body.email,
    };
    users.push(newUser);
    res.status(201).json(users);
    console.log(users);
}

// Create a new user
const updateUser = (req,res)=>{
    const userId = req.params.id;
    const {username, email} = req.body;
    users.filter((user)=>user.id ===userId).map((selectedUser)=>{
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(201).json(users)
};


// DELETE a new user
const deleteUser = (req,res)=>{
    const userId = req.params.id;
    const {username, email} = req.body;
    users = users.filter((user)=> user.id !== userId)
    res.status(201).json(users);
    console.log(users);
};

module.exports = {getAllUsers,createUser,updateUser,deleteUser};