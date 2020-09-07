//require express to help us create our server and routes
const express = require('express');
const router = express.Router();

//import controllers
const usercontrollers = require('../controllers/usercontrollers')

//@type - POST
//@route - /auth
//@desc - route to index page
//@type - PUBLIC
router.get("/", (req, res) => {
  res.send("Hello world, Welcome to Edu_API by KIA")
})

//@type - POST
//@route - /auth/signup
//@desc - route for adding a user to the database
//@type - PUBLIC
router.post('/auth/signup', usercontrollers.signup)

//@type - POST
//@route - /auth/signup
//@desc - route for authenticating a user to log in
//@type - PUBLIC
router.post('/auth/login', usercontrollers.login)

//export router
module.exports = router;