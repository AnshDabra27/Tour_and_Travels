import express from "express";
import Hotel from "../models/HotelSchema.js"
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Create
router.post("/",verifyAdmin, createHotel);

// Update
router.put("/:id",verifyAdmin,  updateHotel);

// Delete
router.delete("/:id",verifyAdmin, deleteHotel);

// Get
router.get("/:id", getHotel);

// Get All
router.get("/", getAllHotels);


export default router