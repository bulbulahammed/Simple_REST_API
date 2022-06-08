const router = require("express").Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controller');



// Set user route
 router.get("/",getAllUsers);

 // Set create route
 router.post("/",createUser);

 // Set update user route
 router.put("/:id",updateUser);

  // Set Delete user route
  router.delete("/:id",deleteUser);

 module.exports = router;