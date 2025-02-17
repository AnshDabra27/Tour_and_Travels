import express from "express";
import Hotel from "../models/HotelSchema.js"
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelsController.js";
const router = express.Router();

// Create
router.post("/", createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id",deleteHotel);

// Get
router.get("/:id", getHotel);

// Get All
router.get("/", getAllHotels);


export default router