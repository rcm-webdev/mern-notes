const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            //get token from header
            token = req.headers.authorization.split(" ")[1];
            
            if (!token) {
                res.status(401);
                throw new Error("Not authorized, no token");
            }
            
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            //get user from token
            req.user = await User.findById(decoded.id).select("-password");
            
            if (!req.user) {
                res.status(401);
                throw new Error("User not found");
            }
            
            next();
        } catch (error) {
            console.log("Auth error:", error.message);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

module.exports = { protect };