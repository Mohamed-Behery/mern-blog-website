import express from "express";
import { newCategory, getCategories } from "../controllers/CategoryControllers.js";

const router = express.Router();

// Add Category
router.post("/", newCategory);

// Get Categories
router.get("/", getCategories);

export default router;
