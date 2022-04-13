const express = require('express');
const router = express.Router();
const models = require("../models/bookModel")
const bookController= require("../controllers/bookController.js");
const UserController= require("../controllers/userController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/createBook", bookController.createBook)

router.get("/getBookData", bookController.getBookData)

module.exports = router;