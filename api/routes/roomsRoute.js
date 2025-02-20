import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom ,updateRoom,deleteRoom,getRoom,getAllRooms} from "../controllers/roomsController.js";
const router = express.Router();


// Create
router.post("/:hotelid",verifyAdmin, createRoom);

// Update
router.put("/:id",verifyAdmin,  updateRoom);

// Delete
router.delete("/:id",verifyAdmin, deleteRoom);

// Get
router.get("/:id", getRoom);

// Get All
router.get("/", getAllRooms);


export default router