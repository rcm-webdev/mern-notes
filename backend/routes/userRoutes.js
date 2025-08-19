const express = require("express");
const router = express.Router();
//controllers are used to handle the logic of the routes
const { registerUser, loginUser, getUserProfile, logoutUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");


router.post("/", registerUser)

router.post("/login", loginUser)

router.get("/profile", protect, getUserProfile)

router.post("/logout", protect, logoutUser)

module.exports = router;