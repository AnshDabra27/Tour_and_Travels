import express from "express";
import { createError } from "../utils/error.js";
import {  deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import {verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js"; 

const router = express.Router();
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user , you are logged in")
// })


// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user , you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin , you are logged in and you can delete all account")
// })



// Update
router.put("/:id", verifyUser,updateUser);

// Delete
router.delete("/:id",verifyUser,deleteUser);

// Get
router.get("/:id", verifyUser,getUser);

// Get All
router.get("/", verifyAdmin,getAllUsers);


export default router