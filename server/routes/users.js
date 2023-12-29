import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/UserControllers.js";
const router = express.Router();

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET USER
router.get("/:id", getUser);

export default router;
