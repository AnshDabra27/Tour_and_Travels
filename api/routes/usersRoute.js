import express from "express";
import { createError } from "../utils/error.js";
import {  deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import {verifyToken} from "../utils/verifyToken.js"; 

const router = express.Router();
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user , you are logged in")
})

// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id",deleteUser);

// Get
router.get("/:id", getUser);

// Get All
router.get("/", getAllUsers);


export default router